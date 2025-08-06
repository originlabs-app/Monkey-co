import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { DisplayCard } from "@/components/DisplayCard";

interface JoinBeforeSectionProps {
  screenWidth: number;
}

export const JoinBeforeSection: React.FC<JoinBeforeSectionProps> = ({ screenWidth }) => {
  const { t } = useTranslation();

  return (
    <div
      className="section-4"
      style={{
        alignSelf: "stretch",
        backgroundColor:
          screenWidth < 1440
            ? "#eaedec"
            : screenWidth >= 1440
              ? "unset"
              : undefined,
        backgroundImage:
          screenWidth >= 1440
            ? "url(/img/background-2.svg)"
            : undefined,
        backgroundPosition: screenWidth >= 1440 ? "50% 50%" : undefined,
        backgroundSize: screenWidth >= 1440 ? "cover" : undefined,
        gap:
          screenWidth < 1440
            ? "32px"
            : screenWidth >= 1440
              ? "48px"
              : undefined,
        padding:
          screenWidth < 1440
            ? "24px 20px"
            : screenWidth >= 1440
              ? "64px 128px"
              : undefined,
        width:
          screenWidth < 1440
            ? "100%"
            : screenWidth >= 1440
              ? "100%"
              : undefined,
      }}
    >
      <p
        className="text-14"
        style={{
          fontSize:
            screenWidth < 1440
              ? "28px"
              : screenWidth >= 1440
                ? "48px"
                : undefined,
          lineHeight:
            screenWidth < 1440
              ? "36px"
              : screenWidth >= 1440
                ? "56px"
                : undefined,
        }}
      >
        {t('joinBefore.title')}
      </p>

      <div
        className="frame-5"
        style={{
          alignSelf: "stretch",
          display:
            screenWidth < 1440
              ? "flex"
              : screenWidth >= 1440
                ? "inline-flex"
                : undefined,
          flexWrap: screenWidth >= 1440 ? "wrap" : undefined,
          gap:
            screenWidth < 1440
              ? "16px"
              : screenWidth >= 1440
                ? "32px"
                : undefined,
          width: screenWidth < 1440 ? "100%" : undefined,
        }}
      >
        <DisplayCard
          cUSTRIPPERCENT={screenWidth >= 1440}
          className="display-card-instance"
          divClassName={screenWidth >= 1440 ? "display-card-2" : undefined}
          frameClassName={screenWidth >= 1440 ? "display-card-3" : undefined}
          isIconHighlighted={false}
          state="default"
          stateIconHighlightedClassName={screenWidth >= 1440 ? "display-card-4" : undefined}
          stateProp="default"
          text={screenWidth < 1440 ? t('features.poolPriority') : t('features.poolPriorityDesc')}
          title={screenWidth < 1440 ? t('features.priorityPool') : t('features.priorityPool')}
          type={screenWidth < 1440 ? "display-h5" : "display-h4"}
          variant="light"
        />
        <DisplayCard
          cUSTRIPPERCENT={screenWidth >= 1440}
          className="display-card-instance"
          divClassName={screenWidth >= 1440 ? "display-card-2" : undefined}
          frameClassName={screenWidth >= 1440 ? "display-card-3" : undefined}
          isIconHighlighted={false}
          state="default"
          stateIconHighlightedClassName={screenWidth >= 1440 ? "display-card-4" : undefined}
          stateProp="default"
          text={screenWidth < 1440 ? t('features.airdropNft') : t('features.airdropNftDesc')}
          title={screenWidth < 1440 ? t('features.airdrop') : t('features.airdrop')}
          type={screenWidth < 1440 ? "display-h5" : "display-h4"}
          variant="light"
        />
        <DisplayCard
          cUSTRIPPERCENT={screenWidth >= 1440}
          className="display-card-instance"
          divClassName={screenWidth >= 1440 ? "display-card-2" : undefined}
          frameClassName={screenWidth >= 1440 ? "display-card-3" : undefined}
          isIconHighlighted={false}
          state="default"
          stateIconHighlightedClassName={screenWidth >= 1440 ? "display-card-4" : undefined}
          stateProp="default"
          text={screenWidth < 1440 ? t('features.doubleRewards') : t('features.doubleRewardsDesc')}
          title={screenWidth < 1440 ? t('features.rewards2x') : t('features.rewards2x')}
          type={screenWidth < 1440 ? "display-h5" : "display-h4"}
          variant="light"
        />
        <DisplayCard
          cUSTRIPPERCENT={screenWidth >= 1440}
          className="display-card-instance"
          divClassName={screenWidth >= 1440 ? "display-card-2" : undefined}
          frameClassName={screenWidth >= 1440 ? "display-card-3" : undefined}
          isIconHighlighted={false}
          state="default"
          stateIconHighlightedClassName={screenWidth >= 1440 ? "display-card-4" : undefined}
          stateProp="default"
          text={screenWidth < 1440 ? t('features.exclusiveCommunity') : t('features.exclusiveCommunityDesc')}
          title={screenWidth < 1440 ? t('features.community') : t('features.community')}
          type={screenWidth < 1440 ? "display-h5" : "display-h4"}
          variant="light"
        />
      </div>
    </div>
  );
};

JoinBeforeSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};