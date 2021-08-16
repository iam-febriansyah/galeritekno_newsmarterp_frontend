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
  PeopleAlt as PeopleAltIcon,
  Domain as DomainIcon,
  LocalHospital as LocalHospitalIcon,
  Build as BuildIcon,
  Schedule as ScheduleIcon,
  PeopleOutline as PeopleOutlineIcon
} from '@material-ui/icons';

export const routeConfig = [
  {name: "Master Data", icon: InboxIcon, indent: 1, submenu: [
    {name: "Clients", icon: PeopleAltIcon, path: "/clients"},
    {name: "Branches", icon: DomainIcon, path: "/branches"},
    {name: "Doctors", icon: AssessmentIcon, path: "/doctors"},
    {name: "Patients", icon: PeopleOutlineIcon, path: "/patients"},
    {name: "Polis", icon: LocalHospitalIcon, path: "/polis"},
    {name: "Services", icon: BuildIcon, path: "/services"},
    {name: "Doctors Schedule", icon: ScheduleIcon, path: "/doctorSchedules"},
    {name: "Doctor Polis", icon: AssessmentIcon, path: "/doctorPolis"},
  ]},
  {name: "User Page DEMO", icon: SupervisedUserCircleIcon, indent: 1, submenu: [
    {name: "Registration", icon: AssessmentIcon, path: "/registration"},
    {name: "Sign In", icon: AssessmentIcon, path: "/SignIn"},
  ]},
  {name: "Demo", icon: SupervisedUserCircleIcon, indent: 1, submenu: [
    {name: "Registration Offline", icon: AssessmentIcon, path: "/registration"},
    {name: "Registration Online", icon: AssessmentIcon, path: "/SignIn"},
  ]},
  {name: "Demo Page", icon: SupervisedUserCircleIcon, indent: 1, submenu: [
    {name: "Page 1", icon: AssessmentIcon, path: "/registration"},
    {name: "Page 2", icon: AssessmentIcon, path: "/SignIn"},
    {name: "Page 3", icon: AssessmentIcon, path: "/registration"},
    {name: "Page 4", icon: AssessmentIcon, path: "/SignIn"},
  ]}
];