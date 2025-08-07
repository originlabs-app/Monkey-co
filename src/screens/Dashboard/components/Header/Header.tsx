import React from 'react';
import { useTranslation } from 'react-i18next';
import { COLORS, SPACING } from '@/constants/theme';
import './Header.css';

interface WalletInfo {
  balance: number;
  keycoin: number;
  address: string;
}

interface HeaderProps {
  walletInfo: WalletInfo;
}

export const Header: React.FC<HeaderProps> = ({ walletInfo }) => {
  const { t } = useTranslation();

  // Fonction pour tronquer l'adresse
  const truncateAddress = (address: string) => {
    if (address.length <= 11) return address;
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  return (
    <header className="dashboard-header">
      {/* Section Gauche - Titre et Description */}
      <div className="header-left">
        <h1 className="header-title">
          {t('dashboard.sidebar.dashboard')}
        </h1>
        <p className="header-subtitle">
          {t('dashboard.header.subtitle')}
        </p>
      </div>

      {/* Section Droite - Informations Financières */}
      <div className="header-right">
        {/* USDC Balance */}
        <div className="wallet-item">
          <span className="wallet-label">USDC</span>
          <span className="wallet-value">{walletInfo.balance.toFixed(2)}</span>
        </div>

        {/* Séparateur */}
        <div className="wallet-separator" />

        {/* Keycoin */}
        <div className="wallet-item">
          <span className="wallet-label">{t('dashboard.header.keycoin')}</span>
          <span className="wallet-value wallet-value-keycoin">
            {walletInfo.keycoin.toLocaleString()}
          </span>
        </div>

        {/* Séparateur */}
        <div className="wallet-separator" />

        {/* Adresse du Portefeuille */}
        <div className="wallet-address">
          <span className="address-text">
            {truncateAddress(walletInfo.address)}
          </span>
        </div>
      </div>
    </header>
  );
};