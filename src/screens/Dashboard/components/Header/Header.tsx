import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import type { WalletInfo } from '../../types/dashboard.types';
import './Header.css';

interface HeaderProps {
  walletInfo: WalletInfo;
}

export const Header: React.FC<HeaderProps> = ({ walletInfo }) => {
  const { t } = useTranslation();

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h1 className="header-title">Tableau de Bord</h1>
        <p className="header-subtitle">Suivez vos investissements et votre impact environnemental</p>
      </div>

      <div className="header-right">
        <div className="wallet-info">
          <div className="wallet-balance">
            <span className="balance-label">USDC</span>
            <span className="balance-value">{walletInfo.balance.toFixed(2)}</span>
          </div>
          <div className="wallet-balance">
            <span className="balance-label">Keycoin</span>
            <span className="balance-value">{walletInfo.keycoin.toLocaleString()}</span>
          </div>
          <div className="wallet-address">
            <span className="address-value">{walletInfo.address}</span>
          </div>
        </div>
        
        <LanguageSwitcher />
        
        <div className="user-profile">
          <div className="user-avatar">👤</div>
        </div>
      </div>
    </header>
  );
};