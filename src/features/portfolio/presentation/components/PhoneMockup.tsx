import styles from "../styles/PhoneMockup.module.css";

interface Props {
  flutterAppUrl?: string;
  children?: React.ReactNode;
}

/**
 * Faithful port of the original PhoneMockup.jsx.
 * Renders an iframe when flutterAppUrl is provided; otherwise renders children
 * (used for the visual-only payment showcase placeholder screen).
 */
export function PhoneMockup({ flutterAppUrl, children }: Props) {
  return (
    <div className={styles.phoneContainer}>
      <div className={styles.phoneCase}>
        <div className={styles.phoneScreen}>
          {flutterAppUrl ? (
            <div className={styles.iframeWrapper}>
              <iframe
                src={flutterAppUrl}
                title="Flutter Payment Demo"
                allow="payment"
              />
            </div>
          ) : (
            <div className="h-full w-full">{children}</div>
          )}
        </div>
        <div className={styles.dynamicIsland}>
          <div className={styles.cameraLens} />
        </div>
        <div className={styles.homeIndicator} />
        <div className={styles.screenGlare} />
        <div className={styles.volumeUp} />
        <div className={styles.volumeDown} />
        <div className={styles.powerButton} />
      </div>
    </div>
  );
}
