export type IconsId =
  | "arrow-left"
  | "camera"
  | "chevron-down"
  | "chevron-left"
  | "chevron-right"
  | "chevron-up"
  | "cross-solid"
  | "cross"
  | "dashboard"
  | "download"
  | "edit"
  | "exclamation-mark"
  | "eye-solid"
  | "eye"
  | "filter"
  | "flag"
  | "full-screen"
  | "info"
  | "log-out"
  | "menu"
  | "notification"
  | "paperclip"
  | "plus"
  | "refresh"
  | "tick-solid"
  | "tick"
  | "upload-file"
  | "upload";

export type IconsKey =
  | "ArrowLeft"
  | "Camera"
  | "ChevronDown"
  | "ChevronLeft"
  | "ChevronRight"
  | "ChevronUp"
  | "CrossSolid"
  | "Cross"
  | "Dashboard"
  | "Download"
  | "Edit"
  | "ExclamationMark"
  | "EyeSolid"
  | "Eye"
  | "Filter"
  | "Flag"
  | "FullScreen"
  | "Info"
  | "LogOut"
  | "Menu"
  | "Notification"
  | "Paperclip"
  | "Plus"
  | "Refresh"
  | "TickSolid"
  | "Tick"
  | "UploadFile"
  | "Upload";

export enum Icons {
  ArrowLeft = "arrow-left",
  Camera = "camera",
  ChevronDown = "chevron-down",
  ChevronLeft = "chevron-left",
  ChevronRight = "chevron-right",
  ChevronUp = "chevron-up",
  CrossSolid = "cross-solid",
  Cross = "cross",
  Dashboard = "dashboard",
  Download = "download",
  Edit = "edit",
  ExclamationMark = "exclamation-mark",
  EyeSolid = "eye-solid",
  Eye = "eye",
  Filter = "filter",
  Flag = "flag",
  FullScreen = "full-screen",
  Info = "info",
  LogOut = "log-out",
  Menu = "menu",
  Notification = "notification",
  Paperclip = "paperclip",
  Plus = "plus",
  Refresh = "refresh",
  TickSolid = "tick-solid",
  Tick = "tick",
  UploadFile = "upload-file",
  Upload = "upload",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.ArrowLeft]: "61697",
  [Icons.Camera]: "61698",
  [Icons.ChevronDown]: "61699",
  [Icons.ChevronLeft]: "61700",
  [Icons.ChevronRight]: "61701",
  [Icons.ChevronUp]: "61702",
  [Icons.CrossSolid]: "61703",
  [Icons.Cross]: "61704",
  [Icons.Dashboard]: "61705",
  [Icons.Download]: "61706",
  [Icons.Edit]: "61707",
  [Icons.ExclamationMark]: "61708",
  [Icons.EyeSolid]: "61709",
  [Icons.Eye]: "61710",
  [Icons.Filter]: "61711",
  [Icons.Flag]: "61712",
  [Icons.FullScreen]: "61713",
  [Icons.Info]: "61714",
  [Icons.LogOut]: "61715",
  [Icons.Menu]: "61716",
  [Icons.Notification]: "61717",
  [Icons.Paperclip]: "61718",
  [Icons.Plus]: "61719",
  [Icons.Refresh]: "61720",
  [Icons.TickSolid]: "61721",
  [Icons.Tick]: "61722",
  [Icons.UploadFile]: "61723",
  [Icons.Upload]: "61724",
};
