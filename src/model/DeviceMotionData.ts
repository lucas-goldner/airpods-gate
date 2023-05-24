export interface DeviceMotionData {
  quaternionX: number;
  quaternionY: number;
  quaternionZ: number;
  quaternionW: number;
  pitch: number;
  roll: number;
  yaw: number;
  gravityX: number;
  gravityY: number;
  gravityZ: number;
  rotationRateX: number;
  rotationRateY: number;
  rotationRateZ: number;
  accelerationX: number;
  accelerationY: number;
  accelerationZ: number;
  magneticFieldX: number;
  magneticFieldY: number;
  magneticFieldZ: number;
  magneticFieldAccuracy: number;
  heading: number;
}
