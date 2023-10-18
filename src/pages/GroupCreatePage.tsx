import React, { useState } from 'react';
import { Step, Stepper } from '@material-tailwind/react';
import GroupCreateNameSection from '@components/GroupCreate/GroupCreateNameSection';
import GroupCreatePhotoSection from '@components/GroupCreate/GroupCreatePhotoSection';
import GroupCreateNickNameSection from '@components/GroupCreate/GroupCreateNickNameSection';
import GroupCreateCompleteSection from '@components/GroupCreate/GroupCreateCompleteSection';
import GroupCreateSearchSetting from '@components/GroupCreate/GroupCreateSearchSetting';

const GroupCreatePage = () => {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [groupInfo, setGroupInfo] = useState({
    groupName: '',
    groupImage: '',
    groupNickname: '',
    introduction: '',
    entranceHint: '',
    entrancePassword: '',
  });

  const groupCreateSections = {
    1: (
      <GroupCreateNameSection
        onNextStep={() => setCurrentStep(2)}
        setGroupInfo={(value) => setGroupInfo((prev) => ({ ...prev, ...value }))}
      />
    ),
    2: <GroupCreatePhotoSection onNextStep={() => setCurrentStep(3)} />,
    3: <GroupCreateSearchSetting onNextStep={() => setCurrentStep(4)} />,
    4: <GroupCreateNickNameSection onNextStep={() => setCurrentStep(5)} />,
    5: <GroupCreateCompleteSection />,
  };

  return (
    <div className='flex flex-col min-h-screen pt-10'>
      <Stepper className='w-40 mb-14 cursor-pointer' activeStep={currentStep - 1}>
        {Object.keys(groupCreateSections).map((step) => (
          <Step
            key={step}
            className='w-6 h-6 text-xs bg-gray-100'
            onClick={() => setCurrentStep(parseInt(step, 10) as 1 | 2 | 3 | 4 | 5)}
          >
            {step}
          </Step>
        ))}
      </Stepper>
      {groupCreateSections[currentStep]}
      {groupInfo && <p>{groupInfo.groupName}</p>}
    </div>
  );
};

export default GroupCreatePage;
