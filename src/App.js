import React, {useState} from 'react';
import styled from 'styled-components';
import {Howl, Howler} from 'howler';
import './App.css';
import Bubble from "./audioclips/bubbleblip.mp3";
import EvilLaugh from "./audioclips/evillaugh.mp3";
import MagicalTwinkle from "./audioclips/magicaltwinkle.mp3";
import Trumpet from "./audioclips/trumpetsad.mp3";
import Rewind from "./audioclips/rewind.mp3";
import Swipe from "./audioclips/reverseswipe.mp3";
import Male119 from "./audioclips/malevoiceclip119.mp3";
import Male123 from "./audioclips/malevoiceclip123.mp3";
import Rise from "./audioclips/rise.mp3";

import Afterlife from "./beatclips/ES_Afterlife - STRLGHT.mp3";
import Build from "./beatclips/DT_SFX_009.wav";
import Pre from "./beatclips/DHC_SFX_013.wav";
import Boom from "./beatclips/Cymatics - House Impact 3.wav";
import Riser from "./beatclips/Cymatics - Trap Riser 3 - 160 BPM G.wav";
import LoopIt from "./beatclips/Cymatics - Big Room Loop 1 - 128 BPM C.wav";
import Crash from "./beatclips/Cymatics - Impact 29.wav";


const pageBackground = "url('https://cdn76.picsart.com/192650139002202.gif?to=min&r=640')";

const audioClips = [
  {src: Afterlife, label: '**** AfterLife ****', key: 'drone'},
  {src: Pre, label: '. .. ... .... ..... ..... ...... .......', key:'Pre'},
  {src: Build, label: '***** you got this ********', key:'Build'},

  {src: EvilLaugh, label: 'HahHAH', key:'HahHAH'},
  {src: Male119, label: 'Woohoo', key: 'Woohoo'},
  {src: Male123, label: 'Hey!', key:'Hey'},

  {src: Boom, label: 'Boom', key:'Boom'},
  {src: Riser, label: 'Let\'s Goooooooo!', key: 'Rise'},
  {src: Crash, label: 'Bam', key: 'Crash'},
];

const original_audioClips = [
   {src: Bubble, label: 'Bubble', key:'Q'},
   {src: EvilLaugh, label: 'HahHAH', key:'W'},
   {src: MagicalTwinkle, label: 'Twinkle', key:'E'},
   {src: Male119, label: 'Woohoo', key: 'A'},
   {src: Male123, label: 'Hey!', key:'S'},
   {src: Swipe, label: 'Swipe', key:'D'},
   {src: Rewind, label: 'Rewind', key:'Z'},
   {src: Rise, label: 'Rise', key: 'X'},
   {src: Trumpet, label: 'Sad', key: 'C'},
]

function App() {
  const [label, setLabel] = useState('Press A Key');
  const [flashLabel, setFlashLabel] = useState();

  const playSound = (soundTrack, label) => {
    var sound = new Howl({
      src: [soundTrack]
      });
    setLabel(label);
    sound.play();
    flashDisplay();
  }

  const flashDisplay = () => {
    console.log("in flashDisplay");
    setFlashLabel(1);
  }

// previous:
// return <Key onClick={()=>sound.play()} > {soundKey} </Key>

  return (
    <Wrapper style={{backgroundImage: pageBackground}}>
      <DrumKit className="neumorphic">
        <Display className="neumorphic" >{label}</Display>
        <Keys>
          {
            audioClips.map((soundObj)=> {
              let soundKey = soundObj.key;
              let label = soundObj.label;
              let soundTrack = soundObj.src;
              return <Key className="neumorphic" onClick={()=>{
                playSound(soundTrack,label);
              }} > {soundKey} </Key>
            })}
        </Keys>
        <Stop className="neumorphic">Stop</Stop>
      </DrumKit>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: cover;
`
const DrumKit = styled.div`
  gap: 15px;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;;
  align-items: center;
  padding: 20px;
  background: #f959de;
`
const Display = styled.div`
  width: 90%;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  border-radius: 10px;
  animation: blinker 1s linear infinite;
`
const Keys = styled.div`
  width: 95%;
  height: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 6px;
`
const Key = styled.div `
  width: 30%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px 4px 2px 4px;
  &:hover {
    background: #80ffdb;
    }
  &:active {
    background: #ffff3f;
  }
`
const Stop = styled.div `
  width: 30%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 4px 0px 4px;
  &:hover {
    background: #80ffdb;
    }
  &:active {
    background: #ffff3f;
  }
`