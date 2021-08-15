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
    {name: "Clients", icon: AssessmentIcon, path: "/clients"},
    {name: "Branches", icon: ShowChartIcon, path: "/branches"},
    {name: "Doctors", icon: AssessmentIcon, path: "/doctors"},
    {name: "Patients", icon: ShowChartIcon, path: "/patients"},
    {name: "Polis", icon: AssessmentIcon, path: "/polis"},
    {name: "Services", icon: ShowChartIcon, path: "/services"},
    {name: "Doctors Schedule", icon: AssessmentIcon, path: "/doctorSchedules"},
    {name: "Doctor Polis", icon: ShowChartIcon, path: "/dococtorPolis"},
  ]},
  {name: "User Page DEMO", icon: SupervisedUserCircleIcon, indent: 1, submenu: [
    {name: "Registration", icon: ShowChartIcon, path: "/registration"},
    {name: "Sign In", icon: AssessmentIcon, path: "/SignIn"},
  ]}
];