
export interface Features {
  exerciseGoal: boolean;
}

export interface TopBadge {
  badgeGradientEndColor: string;
  badgeGradientStartColor: string;
  badgeType: string;
  category: string;
  cheers: any[];
  dateTime: string;
  description: string;
  earnedMessage: string;
  encodedId: string;
  image100px: string;
  image125px: string;
  image300px: string;
  image50px: string;
  image75px: string;
  marketingDescription: string;
  mobileDescription: string;
  name: string;
  shareImage640px: string;
  shareText: string;
  shortDescription: string;
  shortName: string;
  timesAchieved: number;
  value: number;
  unit: string;
}

export interface User {
  age: number;
  ambassador: boolean;
  autoStrideEnabled: boolean;
  avatar: string;
  avatar150: string;
  avatar640: string;
  averageDailySteps: number;
  clockTimeDisplayFormat: string;
  corporate: boolean;
  corporateAdmin: boolean;
  dateOfBirth: string;
  displayName: string;
  displayNameSetting: string;
  distanceUnit: string;
  encodedId: string;
  familyGuidanceEnabled: boolean;
  features: Features;
  firstName: string;
  foodsLocale: string;
  fullName: string;
  gender: string;
  glucoseUnit: string;
  height: number;
  heightUnit: string;
  isChild: boolean;
  isGraduationAvailable: boolean;
  lastName: string;
  locale: string;
  memberSince: string;
  mfaEnabled: boolean;
  offsetFromUTCMillis: number;
  startDayOfWeek: string;
  strideLengthRunning: number;
  strideLengthRunningType: string;
  strideLengthWalking: number;
  strideLengthWalkingType: string;
  swimUnit: string;
  timezone: string;
  topBadges: TopBadge[];
  waterUnit: string;
  waterUnitName: string;
  weight: number;
  weightUnit: string;
}

