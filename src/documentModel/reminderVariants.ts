export const DEFAULT_REMINDER_VARIANT = 'paymentReminder' as const;

export const REMINDER_VARIANTS = {
  paymentReminder: {
    id: 'paymentReminder',
    label: 'Zahlungserinnerung',
    title: 'Zahlungserinnerung',
    intro: 'Sicherlich wurde die folgende Rechnung nur übersehen. Wir bitten Sie, den offenen Betrag zu begleichen.',
    closing: 'Sollte die Zahlung bereits erfolgt sein, betrachten Sie dieses Schreiben bitte als gegenstandslos.',
  },
  firstReminder: {
    id: 'firstReminder',
    label: '1. Mahnung',
    title: '1. Mahnung',
    intro: 'Trotz Fälligkeit konnten wir bislang keinen Zahlungseingang feststellen. Bitte begleichen Sie den offenen Betrag.',
    closing: 'Sollte die Zahlung bereits erfolgt sein, betrachten Sie dieses Schreiben bitte als gegenstandslos.',
  },
  secondReminder: {
    id: 'secondReminder',
    label: '2. Mahnung',
    title: '2. Mahnung',
    intro: 'Unsere bisherige Zahlungsaufforderung blieb ohne Ergebnis. Wir bitten Sie erneut, den offenen Betrag fristgerecht zu begleichen.',
    closing: 'Bitte beachten Sie die angegebene neue Zahlungsfrist.',
  },
  finalReminder: {
    id: 'finalReminder',
    label: 'Letzte Mahnung',
    title: 'Letzte Mahnung',
    intro: 'Trotz unserer bisherigen Schreiben ist der offene Betrag weiterhin nicht eingegangen. Wir fordern Sie letztmalig zur Zahlung auf.',
    closing: 'Nach erfolglosem Ablauf der Frist behalten wir uns weitere Schritte vor.',
  },
} as const;

export type ReminderVariant = keyof typeof REMINDER_VARIANTS;

export const REMINDER_VARIANT_IDS = Object.keys(REMINDER_VARIANTS) as ReminderVariant[];

export function isReminderVariant(value: unknown): value is ReminderVariant {
  return typeof value === 'string' && REMINDER_VARIANT_IDS.includes(value as ReminderVariant);
}
