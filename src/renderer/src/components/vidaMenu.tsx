import UserInterface from "../components/userInterface";
import React, { useEffect, useState } from "react";
import HowToPage from "../gameInfo/howToPage";
import KnowMorePage from "../gameInfo/knowMorePage";
import MapPage from "../components/mapPage";
import { findSection, switchLanguage } from "../utils/functions";
import setup from "../../setup.json";

interface AdditionalGameProps {
  gameStarts: boolean;
  isActive: boolean;
  language: string;
  setGameStarts: () => void;
}

interface AdditionalInfoPagesProps {
  language: string;
  activePage: string;
}

function VidaMenu({ children }) {
  const [activePage, setActivePage] = useState<string>("home");
  const [language, setLanguage] = useState<string>("cz");
  const [gameStarts, setGameStarts] = useState<boolean>(false);
  const [lastActivity, setLastActivity] = useState<Date | null>(null);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [sectionInfo, setSectionInfo] = useState<any>({});

  const inactivityTimeout = 3.5 * 60 * 1000;

  useEffect(() => {
    setSectionInfo(findSection(setup.section));
    const handleActivity = () => {
      setLastActivity(new Date());
      setIsActive(true);
    };
    handleActivity();
    window.addEventListener("mousedown", handleActivity);
    window.addEventListener("touchmove", handleActivity);
    return () => {
      window.removeEventListener("mousedown", handleActivity);
      window.removeEventListener("touchmove", handleActivity);
    };
  }, []);

  useEffect(() => {
    const checkInactivity = () => {
      if (
        lastActivity &&
        new Date().getTime() - lastActivity.getTime() > inactivityTimeout
      ) {
        if (isActive) {
          setIsActive(false);
          setActivePage("home");
          setLanguage("cz");
        }
      } else {
        setIsActive(true);
      }
    };
    let intervalId = setInterval(checkInactivity, 1000);
    return () => clearInterval(intervalId);
  }, [lastActivity, isActive]);

  function handleLanguageClick() {
    setLanguage(switchLanguage(language));
  }

  function handleSideButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    const buttonId: string = e.currentTarget.id;
    setActivePage(buttonId);
  }

  const addAdditionalProps = (child: React.ReactNode) => {
    // Check if the child is a valid React element
    if (React.isValidElement(child)) {
      // If the child is HowToPage or KnowMorePage, add specific props
      if (child.type === HowToPage || child.type === KnowMorePage) {
        return React.cloneElement(child, {
          activePage,
          language,
        } as AdditionalInfoPagesProps);
      }

      // Clone the child and add general props
      return React.cloneElement(child, {
        gameStarts,
        setGameStarts,
        language,
        isActive,
      } as AdditionalGameProps);
    }

    return child;
  };

  return (
    <>
      <div>
        <UserInterface
          activePage={activePage}
          language={language}
          handleLanguageClick={handleLanguageClick}
          handleSideButtonClick={handleSideButtonClick}
          gameStarts={gameStarts}
          sectionInfo={sectionInfo}
        >
          <div>{React.Children.map(children, addAdditionalProps)}</div>
          {/* <HowToPage
            activePage={activePage}
            language={language}
          ></HowToPage>
          <KnowMorePage
            activePage={activePage}
            language={language}
          ></KnowMorePage> */}
        </UserInterface>

        <MapPage
          activePage={activePage}
          language={language}
        ></MapPage>
      </div>
    </>
  );
}

export default VidaMenu;
