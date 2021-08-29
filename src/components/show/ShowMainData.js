/* eslint-disable no-undef */
import React from 'react';
import {
  buildStyles,
  CircularProgressbar,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import IMG_PLACEHOLDER from '../../images/not-found.png';
import { MainData } from './ShowMainData.styled';

const ShowMainData = ({
  name,
  fullName,
  powerStats,
  publisher,
  image,
  children,
}) => {
  return (
    <MainData>
      <div className="img-wrapper">
        <img
          src={image ? image.url : IMG_PLACEHOLDER}
          alt="hero-cover"
        />
      </div>
      <div className="info-wrapper">
        <h1>{name}</h1>
        <span>
          {fullName ? `Full Name - ${fullName}` : null}
        </span>
        <div>
          Published by <b>{publisher}</b>
        </div>
        <h2>Stats</h2>
        <ul>
          <li>
            Intelligence
            <CircularProgressbar
              value={
                +powerStats.intelligence
                  ? powerStats.intelligence
                  : '0'
              }
              text={
                +powerStats.intelligence
                  ? powerStats.intelligence
                  : '0'
              }
              styles={buildStyles({
                textColor: '#ef476f',
                pathColor: '#ef476f',
                trailColor: 'transparent',
              })}
            />
          </li>
          <li>
            Strength
            <CircularProgressbar
              value={
                +powerStats.strength
                  ? powerStats.strength
                  : '0'
              }
              text={
                +powerStats.strength
                  ? powerStats.strength
                  : '0'
              }
              styles={buildStyles({
                textColor: '#ffd166',
                pathColor: '#ffd166',
                trailColor: 'transparent',
              })}
            />
          </li>
          <li>
            Speed
            <CircularProgressbar
              value={
                +powerStats.speed ? powerStats.speed : '0'
              }
              text={
                +powerStats.speed ? powerStats.speed : '0'
              }
              styles={buildStyles({
                textColor: '#06d6a0',
                pathColor: '#06d6a0',
                trailColor: 'transparent',
              })}
            />
          </li>
          <li>
            Durability
            <CircularProgressbar
              value={
                +powerStats.durability
                  ? powerStats.durability
                  : '0'
              }
              text={
                +powerStats.durability
                  ? powerStats.durability
                  : '0'
              }
              styles={buildStyles({
                textColor: '#118ab2',
                pathColor: '#118ab2',
                trailColor: 'transparent',
              })}
            />
          </li>
          <li>
            Power
            <CircularProgressbar
              value={
                +powerStats.power ? powerStats.power : '0'
              }
              text={
                +powerStats.power ? powerStats.power : '0'
              }
              styles={buildStyles({
                textColor: '#073b4c',
                pathColor: '#073b4c',
                trailColor: 'transparent',
              })}
            />
          </li>
          <li>
            Combat:
            <CircularProgressbar
              value={
                +powerStats.combat ? powerStats.combat : '0'
              }
              text={
                +powerStats.combat ? powerStats.combat : '0'
              }
              styles={buildStyles({
                textColor: '#5f0f40',
                pathColor: '#5f0f40',
                trailColor: 'transparent',
              })}
            />
          </li>
        </ul>
      </div>
      {children}
    </MainData>
  );
};

export default ShowMainData;
