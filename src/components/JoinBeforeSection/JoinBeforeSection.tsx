import React from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { DisplayCard } from "@/components/DisplayCard";
import { isMobile, isDesktop, SPACING } from "@/constants/theme";

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
          isMobile(screenWidth)
            ? "#eaedec"
            : isDesktop(screenWidth)
              ? "unset"
              : undefined,
        backgroundImage:
          isDesktop(screenWidth)
            ? "url(/img/background-2.svg)"
            : undefined,
        backgroundPosition: isDesktop(screenWidth) ? "50% 50%" : undefined,
        backgroundSize: isDesktop(screenWidth) ? "cover" : undefined,
        gap: isMobile(screenWidth) ? `${SPACING["3xl"]}px`
            : isDesktop(screenWidth) ? `${SPACING["4xl"]}px`
              : undefined,
        padding:
          isMobile(screenWidth)
            ? `${SPACING["2xl"]}px ${SPACING.xl}px`
            : isDesktop(screenWidth)
              ? `${SPACING["5xl"]}px ${SPACING["7xl"]}px`
              : undefined,
        width:
          isMobile(screenWidth)
            ? "100%"
            : isDesktop(screenWidth)
              ? "100%"
              : undefined,
      }}
    >
      <p
        className="text-14"
        style={{
          fontSize:
            isMobile(screenWidth)
              ? "28px"
              : isDesktop(screenWidth) ? `${SPACING["4xl"]}px`
                : undefined,
          lineHeight:
            isMobile(screenWidth)
              ? "36px"
              : isDesktop(screenWidth)
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
            isMobile(screenWidth)
              ? "flex"
              : isDesktop(screenWidth)
                ? "inline-flex"
                : undefined,
          flexWrap: isDesktop(screenWidth) ? "wrap" : undefined,
          gap: isMobile(screenWidth) ? `${SPACING.lg}px`
              : isDesktop(screenWidth) ? `${SPACING["3xl"]}px`
                : undefined,
          width: isMobile(screenWidth) ? "100%" : undefined,
        }}
      >
        <DisplayCard
          cUSTRIPPERCENT={isDesktop(screenWidth)}
          className="display-card-instance"
          divClassName={isDesktop(screenWidth) ? "display-card-2" : undefined}
          frameClassName={isDesktop(screenWidth) ? "display-card-3" : undefined}
          isIconHighlighted={false}
          state="default"
          stateIconHighlightedClassName={isDesktop(screenWidth) ? "display-card-4" : undefined}
          stateProp="default"
          text={isMobile(screenWidth) ? t('features.poolPriority') : t('features.poolPriorityDesc')}
          title={isMobile(screenWidth) ? t('features.priorityPool') : t('features.priorityPool')}
          type={isMobile(screenWidth) ? "display-h5" : "display-h4"}
          variant="light"
        />
        <DisplayCard
          cUSTRIPPERCENT={isDesktop(screenWidth)}
          className="display-card-instance"
          divClassName={isDesktop(screenWidth) ? "display-card-2" : undefined}
          frameClassName={isDesktop(screenWidth) ? "display-card-3" : undefined}
          isIconHighlighted={false}
          state="default"
          stateIconHighlightedClassName={isDesktop(screenWidth) ? "display-card-4" : undefined}
          stateProp="default"
          text={isMobile(screenWidth) ? t('features.airdropNft') : t('features.airdropNftDesc')}
          title={isMobile(screenWidth) ? t('features.airdrop') : t('features.airdrop')}
          type={isMobile(screenWidth) ? "display-h5" : "display-h4"}
          variant="light"
        />
        <DisplayCard
          cUSTRIPPERCENT={isDesktop(screenWidth)}
          className="display-card-instance"
          divClassName={isDesktop(screenWidth) ? "display-card-2" : undefined}
          frameClassName={isDesktop(screenWidth) ? "display-card-3" : undefined}
          isIconHighlighted={false}
          state="default"
          stateIconHighlightedClassName={isDesktop(screenWidth) ? "display-card-4" : undefined}
          stateProp="default"
          text={isMobile(screenWidth) ? t('features.doubleRewards') : t('features.doubleRewardsDesc')}
          title={isMobile(screenWidth) ? t('features.rewards2x') : t('features.rewards2x')}
          type={isMobile(screenWidth) ? "display-h5" : "display-h4"}
          variant="light"
        />
        <DisplayCard
          cUSTRIPPERCENT={isDesktop(screenWidth)}
          className="display-card-instance"
          divClassName={isDesktop(screenWidth) ? "display-card-2" : undefined}
          frameClassName={isDesktop(screenWidth) ? "display-card-3" : undefined}
          isIconHighlighted={false}
          state="default"
          stateIconHighlightedClassName={isDesktop(screenWidth) ? "display-card-4" : undefined}
          stateProp="default"
          text={isMobile(screenWidth) ? t('features.exclusiveCommunity') : t('features.exclusiveCommunityDesc')}
          title={isMobile(screenWidth) ? t('features.community') : t('features.community')}
          type={isMobile(screenWidth) ? "display-h5" : "display-h4"}
          variant="light"
        />
      </div>
    </div>
  );
};

JoinBeforeSection.propTypes = {
  screenWidth: PropTypes.number.isRequired,
};