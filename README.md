# Home Assistant - Presence Card

Your companion Card for your Everything Presence Lite

<picture>
  <img width="550" alt="Preview" src="https://raw.githubusercontent.com/BlackCube4/Presence-Card/main/PresenceCard.gif">
</picture>

## Card Options
#### Configuration Options
| Name | Example | Description |
|------|---------|-------------|
| type ***(required)*** | `custom:presence-card`
| imageLoc ***(required)*** | /local/images/room.jpg | The path to a top down image of the room.
| roomX ***(required)*** | 2.0 | The width of the room in meters.
| roomY ***(required)*** | 3.71 | The depth of the room in meters.
| sensorX ***(required)*** | 0 | The x position of the Sensor in the Room in meters.
| sensorY ***(required)*** | 0.1 | The y position of the Sensor in the Room in meters.
| sensorRot ***(required)*** | 20 | The rotation of the Sensor in deg.
| invertX | false | The x values of the EPLite are by default invertet. So keep this on true. 
| target1x | sensor.everything_presence_lite_target_1_x | The id of the entity that contais the x position of target 1.
| target1y | sensor.everything_presence_lite_target_1_y | The id of the entity that contais the y position of target 1.
| target2x | sensor.everything_presence_lite_target_2_x | The id of the entity that contais the x position of target 2.
| target2y | sensor.everything_presence_lite_target_2_y | The id of the entity that contais the y position of target 2.
| target3x | sensor.everything_presence_lite_target_3_x | The id of the entity that contais the x position of target 3.
| target3y | sensor.everything_presence_lite_target_3_y | The id of the entity that contais the y position of target 3.
| zone1bx | number.everything_presence_lite_zone_1_begin_x | The id of the entity that contais the start x position of zone 1.
| zone1ex | number.everything_presence_lite_zone_1_end_x | The id of the entity that contais the start x position of zone 1.
| zone1by | number.everything_presence_lite_zone_1_begin_y | The id of the entity that contais the start x position of zone 1.
| zone1ey | number.everything_presence_lite_zone_1_end_y | The id of the entity that contais the start x position of zone 1.
| zone1bx | number.everything_presence_lite_zone_2_begin_x | The id of the entity that contais the start x position of zone 2.
| zone1ex | number.everything_presence_lite_zone_2_end_x | The id of the entity that contais the start x position of zone 2.
| zone1by | number.everything_presence_lite_zone_2_begin_y | The id of the entity that contais the start x position of zone 2.
| zone1ey | number.everything_presence_lite_zone_2_end_y | The id of the entity that contais the start x position of zone 2.
| zone1bx | number.everything_presence_lite_zone_3_begin_x | The id of the entity that contais the start x position of zone 3.
| zone1ex | number.everything_presence_lite_zone_3_end_x | The id of the entity that contais the start x position of zone 3.
| zone1by | number.everything_presence_lite_zone_3_begin_y | The id of the entity that contais the start x position of zone 3.
| zone1ey | number.everything_presence_lite_zone_3_end_y | The id of the entity that contais the start x position of zone 3.
| zone1bx | number.everything_presence_lite_zone_4_begin_x | The id of the entity that contais the start x position of zone 4.
| zone1ex | number.everything_presence_lite_zone_4_end_x | The id of the entity that contais the start x position of zone 4.
| zone1by | number.everything_presence_lite_zone_4_begin_y | The id of the entity that contais the start x position of zone 4.
| zone1ey | number.everything_presence_lite_zone_4_end_y | The id of the entity that contais the start x position of zone 4.

#### Visual Options
| Name | Example | Description |
|------|---------|-------------|
| target1Color | '#0106fa' | The color of target 1.
| target2Color | '#0376fe' | The color of target 2.
| target3Color | '#6265ae' | The color of target 3.
| targetOutline | '#9365ae' | The color of the targets outline.
| zone1Color | '#ef65ae' | The color of zone 1.
| zone2Color | '#01759e' | The color of zone 2.
| zone3Color | '#932332' | The color of zone 3.
| zone4Color | '#afde12' | The color of zone 4.
| displaySensor | false | Whether or not to show the sensor icon.
| displayText | false | Whether or not to show the text.
| textScale | 1.2 | The scale of the text.
