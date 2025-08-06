/**
 * Logger simple et léger pour remplacer console.log
 * Facilement extensible pour ajouter des fonctionnalités (envoi vers API, etc.)
 */

type LogLevel = 'debug' | 'info' | 'warn' | 'error';

interface LogEntry {
  level: LogLevel;
  message: string;
  timestamp: string;
  data?: any;
}

class Logger {
  private isDevelopment = import.meta.env.DEV;
  private logs: LogEntry[] = [];

  private log(level: LogLevel, message: string, data?: any): void {
    const entry: LogEntry = {
      level,
      message,
      timestamp: new Date().toISOString(),
      data
    };

    // Stocker en mémoire (utile pour debug/export)
    this.logs.push(entry);

    // Afficher en dev seulement
    if (this.isDevelopment) {
      const style = this.getStyle(level);
      // eslint-disable-next-line no-console -- Logger nécessite console.log natif
      console.log(
        `%c[${level.toUpperCase()}] ${entry.timestamp}`,
        style,
        message,
        data || ''
      );
    }

    // En production, on pourrait envoyer vers un service de monitoring
    if (!this.isDevelopment && level === 'error') {
      // TODO: Envoyer vers Sentry, LogRocket, etc.
    }
  }

  private getStyle(level: LogLevel): string {
    const styles = {
      debug: 'color: #888',
      info: 'color: #2196F3',
      warn: 'color: #FF9800',
      error: 'color: #F44336; font-weight: bold'
    };
    return styles[level];
  }

  debug(message: string, data?: any): void {
    this.log('debug', message, data);
  }

  info(message: string, data?: any): void {
    this.log('info', message, data);
  }

  warn(message: string, data?: any): void {
    this.log('warn', message, data);
  }

  error(message: string, data?: any): void {
    this.log('error', message, data);
  }

  // Utile pour debug ou export
  getLogs(): LogEntry[] {
    return this.logs;
  }

  clearLogs(): void {
    this.logs = [];
  }
}

// Export singleton
export const logger = new Logger();