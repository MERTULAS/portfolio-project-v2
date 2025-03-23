import React from 'react'
import MainMenuContent from './MainMenuContent';
import MainMenuAnimationProvider from './MainMenuAnimationProvider';

const MainMenu = () => {
  return (
    <MainMenuAnimationProvider>
      <MainMenuContent />
    </MainMenuAnimationProvider>
  )
}

export default MainMenu;