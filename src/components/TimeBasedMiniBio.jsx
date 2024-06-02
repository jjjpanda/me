import React, { useState } from 'react';
import { Box, Text, Space } from '@mantine/core';
import useInterval from '../hooks/useInterval.jsx';

import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween'
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(isBetween)
dayjs.extend(customParseFormat);

const commonTimescripts = [
  { start: '2 am', end: '6 am', script: <Text span><Text span c="dimmed">zzz...</Text> dreaming about code... or math... or quantum mechanics... <Text span c="dimmed">zzz...</Text></Text> },
  { start: '6 am', end: '9 am', script: <Text span>starting the day and getting ready to work!</Text> },
];

const weekdayTimescripts = [
  ...commonTimescripts,
  { start: '9 am', end: '11 am', script: <Text span>multitasking <Text span c="dimmed">(coding)</Text> during stand up.</Text> },
  { start: '11 am', end: '12 pm', script: <Text span>catching up on emails about production issues.</Text> },
  { start: '12 pm', end: '2 pm', script: <Text span>it's time for pull request reviews—powered by protein bars.</Text> },
  { start: '2 pm', end: '5 pm', script: <Text span><Text span fw={700}>in the zone</Text>, trying to close Jira tickets!</Text> },
  { start: '5 pm', end: '7 pm', script: <Text span>driving home while listening to a podcast about the philosophy of religion <Text span fw={700}>or</Text> blasting 80s Japanese city-pop.</Text> },
  { start: '7 pm', end: '9 pm', script: <Text span>making dinner while learning about black holes, how they make blue LEDs, or techniques to perform arbitrary code execution during a speedrun of Ocarina of Time.</Text> },
  { start: '9 pm', end: '11 pm', script: <Text span>scheduled programming— <Text span fs="italic">Coding After Dark</Text></Text> },
  { start: '11 pm', end: '2 am', script: <Text span>refactoring a likelihood estimation function or trying to fix the same bug for the past two hours.</Text> },
];

const weekendTimescripts = [
  ...commonTimescripts,
  { start: '9 am', end: '11 am', script: <Text span>staring at broken code while eating breakfast.</Text> },
  { start: '11 am', end: '12 pm', script: <Text span>I'm brewing tea for my kombucha SCOBY <Text span c="dimmed">(at the fermentation station)</Text>!</Text> },
  { start: '12 pm', end: '3 pm', script: <Text span>hopefully not at my desk, <Text span fs="italic">but if I am</Text>, I just had a funny idea for a song <Text span fw={700}>or</Text> a eureka moment for some code.</Text> },
  { start: '3 pm', end: '10 pm', script: <Text span>I'm using my weekend to work on my side project<Text span c="dimmed">(s)</Text>.</Text> },
  { start: '10  pm', end: '2 am', script: <Text span>if I'm at my desk right now I'm so deep in the zone that only the most <Text span fw={700}>extreme</Text> sleepiness is getting me out.</Text> },
];

const getCurrentScript = (timeScripts, currentTime) => {
  for (let { start, end, script } of timeScripts) {
    const startTime = dayjs(start, ['h a']);
    const endTime = dayjs(end, ['h a']);

    console.log(startTime, endTime, currentTime)

    if (
      (startTime.hour() < endTime.hour() && currentTime.isBetween(startTime, endTime)) ||
      (startTime.hour() > endTime.hour() && (currentTime.isAfter(startTime) || currentTime.isBefore(endTime)))
    ) {
      return script;
    }
  }
  return null;
};

const TimeBasedMiniBio = (props) => {
  const [currentTime, setCurrentTime] = useState(dayjs());

  useInterval(() => {
    setCurrentTime(dayjs());
  }, 10000);

  const dayOfWeek = currentTime.day();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const timeScripts = isWeekend ? weekendTimescripts : weekdayTimescripts;

  if (props.all) {
    return (
      <Box>
        Weekday:
        {weekdayTimescripts.map(({ start, end, script }, index) => (
          <>
            <Text c="blue" key={`script-weekday-${index}`}>
              {`From ${start} to ${end}:`}
            </Text>
            {script}
          </>
        ))}
        <Space />
        Weekend:
        {weekendTimescripts.map(({ start, end, script }, index) => (
          <>
            <Text c="blue" key={`script-weekend-${index}`}>
              {`From ${start} to ${end}:`}
            </Text>
            {script}
          </>
        ))}
      </Box>
    );
  }

  const currentScript = getCurrentScript(timeScripts, currentTime);

  return (
    <Box>
      <Text span>It's {currentTime.format('h:mm A')}:</Text> {currentScript || <Text span>I'm probably coding right now.</Text>}
    </Box>
  );
};

export default TimeBasedMiniBio;
