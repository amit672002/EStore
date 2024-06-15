import { AppBar, Switch, Toolbar, Typography } from "@mui/material";

interface Props {
  changeTheme: () => void;
  darkMode: boolean;
}
export default function Header({ changeTheme, darkMode }: Props) {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography>Header</Typography>
        <Switch checked={darkMode} onChange={changeTheme} />
      </Toolbar>
    </AppBar>
  );
}
