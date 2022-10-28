interface IProps {
  open: boolean
}

const Sidebar = (Props: IProps) => {
  const { open } = Props;

  return (
    <div className={open ? "sidebar" : "sidebar-open"}>
      Sidebar
    </div>
  )
}

export default Sidebar;