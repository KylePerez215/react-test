import React from 'react';

interface IProps {
  onUpdateSideOpen: () => void
}

const Header = (Props: IProps) => {
  const { onUpdateSideOpen } = Props;

  // const mobileSidebarToggle = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   console.log(e.target);
  // }

  return (
    <div className="main-navbar">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onUpdateSideOpen}>
        <svg className="fill-current w-4 h-4" viewBox="0 0 20 20"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
      </button>
      Header
    </div>
  )
}

export default Header;