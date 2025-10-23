import { CommonModule, DatePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { map } from 'rxjs';
import { Visit } from '../../../../core/models/visit.model';
import { AddressFormatPipe } from '../../../../core/pipes/address-format-pipe';
import { TranslationService } from '../../../../core/services/translation/translation.service';
import { VisitsService } from '../../../../core/services/visits/visits.service';

@Component({
  selector: 'app-visit-details-dialog',
  imports: [ButtonModule, CommonModule, DatePipe, AddressFormatPipe],
  templateUrl: './visit-details-dialog.html',
  styleUrl: './visit-details-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VisitDetailsDialog implements OnInit {
  private ref = inject(DynamicDialogRef);
  private config = inject(DynamicDialogConfig);
  protected translationService = inject(TranslationService);
  private visitService = inject(VisitsService);
  public readonly visitId = this.config.data?.visitId;

  ngOnInit(): void {
    // Initialization logic here
    this.loadVisitDetails(this.visitId);
  }

  public readonly visit = signal<Visit | null>(null);

  private loadVisitDetails(visitId: string): void {
    this.visitService
      .getVisitDetails(visitId)
      .pipe(
        map((visit) => {
          return {
            id: visit.visit.id,
            doctorName: `${visit.visit.doctor.doctorName} ${visit.visit.doctor.doctorSurname}`,
            doctorPhoto: 'visit.visit.doctor.photoUrl',
            specialisation: visit.visit.doctor.specialisations[0],
            institution: visit.visit.institution.institutionName,
            institutionPhoto: '',
            address: 'visit.visit.institution',
            date: new Date(visit.visit.time.startTime),
            status: visit.visit.status,
            notes: visit.visit.note,
            prescriptionPin: 'visit.visit.codes.prescription',
            referralPin: 'visit.visit.codes.referral',
          };
        }),
      )
      .subscribe((visit) => {
        this.visit.set(visit);
      });
  }

  public reviewVisit(): void {
    this.ref.close('REVIEW');
  }

  public closeDialog(): void {
    this.ref.close();
  }
}
