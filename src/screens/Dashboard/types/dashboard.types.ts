/**
 * Types centralisés pour le Dashboard
 * Respecte le principe SSOT
 */

export interface WalletInfo {
  balance: number;
  keycoin: number;
  address: string;
}

export interface DashboardStats {
  ecologicalImpact: number;
  totalInvested: number;
  revenue: number;
  keycoinReceived: number;
  co2Avoided: number;
}

export interface CommunityStats {
  projects: number;
  co2Saved: number;
  totalInvested: number;
}

export interface MenuItem {
  id: string;
  label: string;
  icon: string;
  active?: boolean;
}

export interface ChartDataPoint {
  date: string;
  value: number;
  label?: string;
}

export interface VoteItem {
  id: string;
  title: string;
  status: 'upcoming' | 'active' | 'completed';
  votingPower?: number;
}

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  action: string;
  imageUrl?: string;
}