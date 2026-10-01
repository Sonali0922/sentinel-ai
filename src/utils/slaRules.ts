import { normalizeUrgency } from "./complaintAdapters";

export const SLA_RESPONSE_HOURS = {
  CRITICAL: 0.5,
  High: 4,
  Medium: 24,
  Low: 72,
} as const;

const slaRules = {
  CRITICAL: {
    label: "Critical",
    response: "30 min response",
    resolution: "6-12 hour physical resolution",
    escalation: "Alert Commissioner if unassigned after 2 hours.",
  },
  High: {
    label: "High",
    response: "4 hour response",
    resolution: "24 hour physical resolution",
    escalation: "Notify Dept Head if unassigned after 8 hours.",
  },
  Medium: {
    label: "Medium",
    response: "24 hour response",
    resolution: "3-5 day physical resolution",
    escalation: "Weekly report to Dept Head.",
  },
  Low: {
    label: "Low",
    response: "72 hour response",
    resolution: "7-10 day physical resolution",
    escalation: "Standard administrative queue.",
  },
} as const;

export function getSlaHoursForUrgency(urgency: string): number {
  return SLA_RESPONSE_HOURS[normalizeUrgency(urgency)];
}

export function getSlaRuleForUrgency(urgency: string) {
  return slaRules[normalizeUrgency(urgency)];
}
