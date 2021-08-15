import {
  Inbox as InboxIcon,
  SupervisedUserCircle as SupervisedUserCircleIcon,
  Assessment as AssessmentIcon,
  BarChart as BarChartIcon,
  KeyboardReturn as KeyboardReturnIcon,
  ShowChart as ShowChartIcon,
  TrackChanges as TrackChangesIcon,
  TableChart as TableChartIcon,
  CancelScheduleSend as CancelScheduleSendIcon,
  Send as SendIcon,
  LocalShipping as LocalShippingIcon,
  Assignment as AssignmentIcon,
  Repeat as RepeatIcon,
  Storage as StorageIcon,
  Done as DoneIcon,
} from '@material-ui/icons';

export const routeConfig = [
  {name: "Master Data", icon: InboxIcon, indent: 1, submenu: [
    {name: "Clients", icon: AssessmentIcon, path: "/summary"},
    {name: "Branches", icon: ShowChartIcon, path: "/stock"},
    {name: "Doctors", icon: AssessmentIcon, path: "/summary"},
    {name: "Patients", icon: ShowChartIcon, path: "/stock"},
    {name: "Polis", icon: AssessmentIcon, path: "/summary"},
    {name: "Services", icon: ShowChartIcon, path: "/stock"},
    {name: "Doctors Schedule", icon: AssessmentIcon, path: "/summary"},
    {name: "Doctor Polis", icon: ShowChartIcon, path: "/stock"},
  ]},
  {name: "User Page DEMO", icon: SupervisedUserCircleIcon, indent: 1, submenu: [
    {name: "REGISTRATION", icon: ShowChartIcon, path: "/stock"},
    {name: "SIGN IN", icon: AssessmentIcon, path: "/summary"},
  ]}
];