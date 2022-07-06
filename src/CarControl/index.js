import { useState } from "react";

/**
 * @namespace useCar
 * @param {number} defaultFMStation
 * @param {number} startingWheelPosition - the degree of the position of the wheels at start
 * @returns {object}
 */
const useCar = (defaultFMStation = 101.4, startingWheelPosition = 0) => {
  const [turnedOn, setTurnedOn] = useState(false);
  const [autoPilot, setAutoPilot] = useState(false);
  const [wheelPosition, setWheelPosition] = useState(startingWheelPosition);
  const [currentSpeed, setCurrentSpeed] = useState(0);
  const [fuelDoorOpen, setFuelDoorOpen] = useState(false);
  const [FMStation, setFMStation] = useState(defaultFMStation);

  const turnOn = () => {
    if (!turnedOn) {
      setCurrentSpeed(0);
      setTurnedOn(true);
    }
  };
  /**
   * turning off the car
   */
  const turnOff = () => {
    if (turnedOn) {
      setCurrentSpeed(0);
      setTurnedOn(false);
    }
  };

  /**
   *
   * @param {string} direction
   * @param {number} rotationDegree
   */
  const turnWheel = (direction, rotationDegree) => {
    let res;
    switch (direction) {
      case "left":
        res = wheelPosition - rotationDegree;
        if (res < 0) wheelPosition = 360 - wheelPosition - res;
        break;
      case "right":
        break;
      default:
        break;
    }
    console.log(
      `you turned in the ${direction} direction at a ${rotationDegree} degree`
    );
  };

  /**
   * turns the light :
   * 0 turn the lights off
   * 1 turn them on with low intensity
   * 2 turn them on with high intensity
   * @param {number} intensity
   */
  const turnLights = (intensity) => {};

  /**
   * accelerate until the car reach the speedTreshold
   * @param {number} speedTreshold
   */
  const accelerate = (speedTreshold) => {
    console.log(
      `you accelerated by pushing the pedal until you reached ${speedTreshold} km/h`
    );
    setCurrentSpeed(speedTreshold);
  };

  /**
   * decelerate until the car reach the speedTreshold
   * @param {decelerate} speedTreshold
   */
  const decelerate = (speedTreshold) => {
    console.log(
      `you decelerated pushing the pedal until you reached ${speedTreshold} km/h`
    );
    setCurrentSpeed(speedTreshold);
  };

  /**
   *
   * @returns {number} - The current speed of the car
   */
  const checkCurrentSpeed = () => {
    return currentSpeed;
  };

  /**
   * turn on the radio
   */
  const turnOnRadio = () => {
    setFMStation(defaultFMStation);
    console.log(`You're listening to ${FMStation}`);
  };

  /**
   * turn off the radio
   */
  const turnOffRadio = () => {
    console.log(`......`);
  };

  /**
   * change the FM Radio station
   * @param {number} FMStation - FMStation
   */
  const changeFMStation = (FMStation) => {
    setFMStation(FMStation);
  };

  /**
   * lock the fuel door
   */
  const lockFuelDoor = () => {
    if (!fuelDoorOpen) setFuelDoorOpen(true);
  };

  /**
   * unlock the fuel door
   */
  const unlockFuelDoor = () => {
    if (fuelDoorOpen) setFuelDoorOpen(false);
  };

  /**
   * adjust the left or right mirror depending on the parameter
   * with the provided direction and rotation degree
   * @param {string} side
   * @param {string} direction
   * @param {number} rotationDegree
   */
  const adjustRearviewerMirrors = (side, direction, rotationDegree) => {};

  /**
   * enables autopilot to go to the given destination
   * @param {string} destination
   */
  const enableAutoPilot = (destination) => {
    setAutoPilot(true);
  };

  /**
   * disables autopilot but keep displaying the gps
   */
  const disableAutoPilot = () => {
    setAutoPilot(false);
  };

  /**
   * pair a bluetooth device to the vehicle
   * @param {string} bluetoothID
   */
  const pairDeviceWithBluetooth = (bluetoothID) => {};

  /**
   * call given contact name of the paired device
   * @param {string} contact
   */
  const callContact = (contact) => {};

  const control = {
    turnOn,
    turnOff,
    turnWheel,
    turnLights,
    accelerate,
    decelerate,
    checkCurrentSpeed,
    turnOnRadio,
    turnOffRadio,
    changeFMStation,

    lockFuelDoor,
    unlockFuelDoor,
    adjustRearviewerMirrors,
    enableAutoPilot,
    disableAutoPilot,
    pairDeviceWithBluetooth,
    callContact,
  };

  return { control };
};

export default useCar;
