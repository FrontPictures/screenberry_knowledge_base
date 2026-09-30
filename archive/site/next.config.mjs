import nextra from 'nextra';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createNodeHelpRedirects } from './shared/lib/node-help-redirects.mjs';

const withNextra = nextra({
  unstable_shouldAddLocaleToLinks: true,
});
const projectRoot = dirname(fileURLToPath(import.meta.url));
const guideLocales = ['en', 'jp'];

export default withNextra({
  turbopack: {
    root: projectRoot,
  },
  i18n: {
    locales: guideLocales,
    defaultLocale: 'en',
    localeDetection: false,
  },
  async redirects() {
    const redirects = [
      {
        source: '/:lang(en|jp)/media-playback/media-player',
        destination: '/:lang/media-playback/media-player/media-player-overview',
        permanent: true,
      },
      {
        source: '/whats-new/release-notes',
        destination: '/whats-new/release-notes-3-4',
        permanent: true,
      },
      {
        source: '/3_1',
        destination: '/',
        permanent: true,
      },
      {
        source: '/3_2',
        destination: '/',
        permanent: true,
      },
      {
        source: '/3_3',
        destination: '/',
        permanent: true,
      },
      {
        source: '/3_4',
        destination: '/',
        permanent: true,
      },
      {
        source: '/en/3_4',
        destination: '/',
        permanent: true,
      },
      {
        source: '/nodes/3D_Combine',
        destination: '/node-reference/nodes#3d',
        permanent: true,
      },
      {
        source: '/nodes/3D_Model_Export',
        destination: '/3d-scene/3d-model#saving-3d-models',
        permanent: true,
      },
      {
        source: '/nodes/3D_Model_File',
        destination: '/3d-scene/3d-model#adding-3d-models',
        permanent: true,
      },
      {
        source: '/nodes/3D_Primitive',
        destination: '/3d-scene/3d-primitive',
        permanent: true,
      },
      {
        source: '/nodes/3D_Scene',
        destination: '/3d-scene/3d-scene-settings',
        permanent: true,
      },
      {
        source: '/nodes/Camera_3D',
        destination: '/3d-scene/3d-camera',
        permanent: true,
      },
      {
        source: '/nodes/Projection_Mapper',
        destination: '/3d-scene/projection-mapper',
        permanent: true,
      },
      {
        source: '/nodes/Transform_3D',
        destination: '/node-reference/nodes#3d',
        permanent: true,
      },
      {
        source: '/nodes/VR_Camera',
        destination: '/node-reference/nodes#3d',
        permanent: true,
      },
      {
        source: '/nodes/Audio_Analyzer',
        destination: '/node-reference/nodes#audio',
        permanent: true,
      },
      {
        source: '/nodes/Audio_Channel_Mixer',
        destination: '/node-reference/nodes#audio',
        permanent: true,
      },
      {
        source: '/nodes/Audio_Delay',
        destination: '/node-reference/nodes#audio',
        permanent: true,
      },
      {
        source: '/nodes/Audio_In',
        destination: '/node-reference/nodes#audio',
        permanent: true,
      },
      {
        source: '/nodes/Audio_Mixer',
        destination: '/node-reference/nodes#audio',
        permanent: true,
      },
      {
        source: '/nodes/Audio_Out',
        destination: '/node-reference/nodes#audio',
        permanent: true,
      },
      {
        source: '/nodes/DTMF_Generator',
        destination: '/node-reference/nodes#audio',
        permanent: true,
      },
      {
        source: '/nodes/Tone_Generator',
        destination: '/node-reference/nodes#audio',
        permanent: true,
      },
      {
        source: '/nodes/VST_Effect',
        destination: '/node-reference/nodes#audio',
        permanent: true,
      },
      {
        source: '/nodes/BlendCalibrators',
        destination: '/node-reference/nodes#auto-calibration',
        permanent: true,
      },
      {
        source: '/nodes/Calibrator',
        destination: '/node-reference/nodes#auto-calibration',
        permanent: true,
      },
      {
        source: '/nodes/CalibratorPatch',
        destination: '/node-reference/nodes#auto-calibration',
        permanent: true,
      },
      {
        source: '/nodes/Digital_Camera',
        destination: '/node-reference/nodes#auto-calibration',
        permanent: true,
      },
      {
        source: '/nodes/DomeSDK_Loader',
        destination: '/node-reference/nodes#auto-calibration',
        permanent: true,
      },
      {
        source: '/nodes/DomeSDK_Saver',
        destination: '/node-reference/nodes#auto-calibration',
        permanent: true,
      },
      {
        source: '/nodes/GenICam_Camera',
        destination: '/node-reference/nodes#auto-calibration',
        permanent: true,
      },
      {
        source: '/nodes/Virtual_Camera',
        destination: '/node-reference/nodes#auto-calibration',
        permanent: true,
      },
      {
        source: '/nodes/Action_Delay',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Action_Toggle',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Content_Sync',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Event_Filter',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Event_Scheduler',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Gate',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Media_Player_Action',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/On_Item_Started',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/On_Startup',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Play_Item',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Playlist_Randomizer',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Preset',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Script',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/System_Exec',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Ticker',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Art-Net_Receiver',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/Art-Net_Sender',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/HTTP_Listener',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/HTTP_Request',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/MIDI_Controller',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/MIDI_In',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/MIDI_Out',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/MIDI_Player',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/MQTT_Client',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/OSC_Listener',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/OSC_Sender',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/Serial_Port_Input',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/Serial_Port_Output',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/TCP_Listener',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/TCP_Sender',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/UDP_Listener',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/UDP_Sender',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/Wake_on_LAN',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/Web_Server',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/Barco_Control',
        destination: '/node-reference/nodes#device-control',
        permanent: true,
      },
      {
        source: '/nodes/PJLink',
        destination: '/node-reference/nodes#device-control',
        permanent: true,
      },
      {
        source: '/nodes/Projectors_Control_(Serial_Port)',
        destination: '/node-reference/nodes#device-control',
        permanent: true,
      },
      {
        source: '/nodes/Samsung_MDC_Protocol',
        destination: '/node-reference/nodes#device-control',
        permanent: true,
      },
      {
        source: '/nodes/Serial_Relay_Input',
        destination: '/node-reference/nodes#device-control',
        permanent: true,
      },
      {
        source: '/nodes/SerialPPM',
        destination: '/node-reference/nodes#device-control',
        permanent: true,
      },
      {
        source: '/nodes/Dome_Transform',
        destination: '/warping-alignment/dometransform',
        permanent: true,
      },
      {
        source: '/nodes/Fisheye_Lens_Correction',
        destination: '/node-reference/nodes#fulldome',
        permanent: true,
      },
      {
        source: '/nodes/Fisheye_Remap',
        destination: '/node-reference/nodes#fulldome',
        permanent: true,
      },
      {
        source: '/nodes/LatLong_to_Dome',
        destination: '/warping-alignment/latlongtodome',
        permanent: true,
      },
      {
        source: '/nodes/Planar_to_Dome',
        destination: '/warping-alignment/planartodome',
        permanent: true,
      },
      {
        source: '/nodes/Spherical_Mirror_Warp',
        destination: '/node-reference/nodes#fulldome',
        permanent: true,
      },
      {
        source: '/nodes/Canvas',
        destination: '/node-reference/primary-nodes/canvas',
        permanent: true,
      },
      {
        source: '/working-with-nodes/node-library/primary-nodes/canvas',
        destination: '/node-reference/primary-nodes/canvas',
        permanent: true,
      },
      {
        source: '/nodes/Comment_Area',
        destination: '/node-reference/nodes#general',
        permanent: true,
      },
      {
        source: '/nodes/Display',
        destination: '/node-reference/primary-nodes/display',
        permanent: true,
      },
      {
        source: '/working-with-nodes/node-library/primary-nodes/display',
        destination: '/node-reference/primary-nodes/display',
        permanent: true,
      },
      {
        source: '/nodes/Group',
        destination: '/working-with-nodes/adding-and-managing-nodes#grouping-nodes',
        permanent: true,
      },
      {
        source: '/nodes/Render_Target',
        destination: '/node-reference/primary-nodes/rendertarget',
        permanent: true,
      },
      {
        source: '/working-with-nodes/node-library/primary-nodes/rendertarget',
        destination: '/node-reference/primary-nodes/rendertarget',
        permanent: true,
      },
      {
        source: '/nodes/Server_Control',
        destination: '/node-reference/nodes#general',
        permanent: true,
      },
      {
        source: '/nodes/Shared_Group',
        destination: '/node-reference/nodes#general',
        permanent: true,
      },
      {
        source: '/nodes/System_Info',
        destination: '/node-reference/nodes#general',
        permanent: true,
      },
      {
        source: '/nodes/Joystick',
        destination: '/node-reference/nodes#human-interface-devices',
        permanent: true,
      },
      {
        source: '/nodes/Keyboard',
        destination: '/node-reference/nodes#human-interface-devices',
        permanent: true,
      },
      {
        source: '/nodes/Mouse',
        destination: '/node-reference/nodes#human-interface-devices',
        permanent: true,
      },
      {
        source: '/nodes/Presentation_Clicker',
        destination: '/node-reference/nodes#human-interface-devices',
        permanent: true,
      },
      {
        source: '/nodes/Alpha_Mask',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Chroma_Key',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Color_Correction',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Extract_Channel',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/FX_Stack',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/GLSL_Shader',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Image_Blending',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Image_Buffer',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Image_Saver',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Image_Split',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Invert',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Lighten',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/LUT',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Maximal',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Merge_to_Stereoscopic',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Multi-GPU_Image',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Multiply',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Threshold',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/UV_Remap',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Add_Float',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Add_Int',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Add_IVec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Add_Vec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Add_Vec3',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Add_Vec4',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Compare_Float',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Divide_Float',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Divide_Int',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Divide_IVec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Divide_Vec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Divide_Vec3',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Divide_Vec4',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Easing_Function',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Expression',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Float_In_Range',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Float_Mix',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Line_Graph',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Logic_Operation',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Max_Float',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Max_Int',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Max_IVec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Max_Vec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Max_Vec3',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Max_Vec4',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Min_Float',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Min_Int',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Min_IVec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Min_Vec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Min_Vec3',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Min_Vec4',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Multiply_Float',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Multiply_Int',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Multiply_IVec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Multiply_Vec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Multiply_Vec3',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Multiply_Vec4',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/PID_Controller',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Simulated_System',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Smooth_Transition',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Subtract_Float',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Subtract_Int',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Subtract_IVec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Subtract_Vec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Subtract_Vec3',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Subtract_Vec4',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Threshold_Float',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Vec2_Mix',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Vec3_Mix',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Vec4_Mix',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Gradient',
        destination: '/node-reference/nodes#media-sources',
        permanent: true,
      },
      {
        source: '/nodes/Image_File',
        destination: '/node-reference/nodes#media-sources',
        permanent: true,
      },
      {
        source: '/nodes/Media_Player',
        destination: '/working-with-nodes/node-library/primary-nodes/mediaplayer',
        permanent: true,
      },
      {
        source: '/nodes/Notch_Playback',
        destination: '/working-with-nodes/node-library/integration-nodes/notchplayback',
        permanent: true,
      },
      {
        source: '/nodes/Solid_Color',
        destination: '/node-reference/nodes#media-sources',
        permanent: true,
      },
      {
        source: '/nodes/Test_Pattern',
        destination: '/node-reference/nodes#media-sources',
        permanent: true,
      },
      {
        source: '/nodes/Text_Image',
        destination: '/node-reference/nodes#media-sources',
        permanent: true,
      },
      {
        source: '/nodes/Touch_Engine',
        destination: '/node-reference/integration-nodes/touchengine',
        permanent: true,
      },
      {
        source: '/working-with-nodes/node-library/integration-nodes/touchengine',
        destination: '/node-reference/integration-nodes/touchengine',
        permanent: true,
      },
      {
        source: '/nodes/Web_View',
        destination: '/node-reference/nodes#media-sources',
        permanent: true,
      },
      {
        source: '/nodes/LTC_Decoder',
        destination: '/node-reference/nodes#timecode',
        permanent: true,
      },
      {
        source: '/nodes/LTC_Encoder',
        destination: '/node-reference/nodes#timecode',
        permanent: true,
      },
      {
        source: '/nodes/MTC_Decoder',
        destination: '/node-reference/nodes#timecode',
        permanent: true,
      },
      {
        source: '/nodes/Timecode_Display',
        destination: '/node-reference/nodes#timecode',
        permanent: true,
      },
      {
        source: '/nodes/Timecode_Events',
        destination: '/node-reference/nodes#timecode',
        permanent: true,
      },
      {
        source: '/nodes/Timecode',
        destination: '/node-reference/nodes#timecode',
        permanent: true,
      },
      {
        source: '/nodes/Accumulator',
        destination: '/node-reference/nodes#tracking',
        permanent: true,
      },
      {
        source: '/nodes/BlobTracker',
        destination: '/node-reference/nodes#tracking',
        permanent: true,
      },
      {
        source: '/nodes/FreeD_Tracker',
        destination: '/node-reference/nodes#tracking',
        permanent: true,
      },
      {
        source: '/nodes/LiDAR',
        destination: '/node-reference/nodes#tracking',
        permanent: true,
      },
      {
        source: '/nodes/Mo-Sys_F4',
        destination: '/node-reference/nodes#tracking',
        permanent: true,
      },
      {
        source: '/nodes/RTTrP_Tracker',
        destination: '/node-reference/nodes#tracking',
        permanent: true,
      },
      {
        source: '/nodes/Button',
        destination: '/node-reference/nodes#user-controls',
        permanent: true,
      },
      {
        source: '/nodes/Checkbox',
        destination: '/node-reference/nodes#user-controls',
        permanent: true,
      },
      {
        source: '/nodes/Color_Picker',
        destination: '/node-reference/nodes#user-controls',
        permanent: true,
      },
      {
        source: '/nodes/Combo_Box',
        destination: '/node-reference/nodes#user-controls',
        permanent: true,
      },
      {
        source: '/nodes/Float',
        destination: '/node-reference/nodes#user-controls',
        permanent: true,
      },
      {
        source: '/nodes/GUI_Panel',
        destination: '/node-reference/nodes#user-controls',
        permanent: true,
      },
      {
        source: '/nodes/Int',
        destination: '/node-reference/nodes#user-controls',
        permanent: true,
      },
      {
        source: '/nodes/Label',
        destination: '/node-reference/nodes#user-controls',
        permanent: true,
      },
      {
        source: '/nodes/Slider',
        destination: '/node-reference/nodes#user-controls',
        permanent: true,
      },
      {
        source: '/nodes/Switch',
        destination: '/node-reference/nodes#user-controls',
        permanent: true,
      },
      {
        source: '/nodes/Text_Value',
        destination: '/node-reference/nodes#user-controls',
        permanent: true,
      },
      {
        source: '/nodes/Action_to_Bool',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Action_to_Float',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Bool_to_Action',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Bool_to_Float',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Bool_to_Int',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/CHOP_Input',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/CHOP_Output',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Combo_to_Int',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Euler_to_Quaternion',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Float_Array_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Float_Array',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Float_Matrix_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Float_Matrix',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Float_to_Action',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Float_to_Bool',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Float_to_Int',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Float_to_Timecode',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Image_Format',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Int_Array_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Int_Array',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Int_to_Bool',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Int_to_Combo',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Int_to_Float',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/IVec2_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/IVec2',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Mat4_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Mat4',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Matrix_Decompose',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Quaternion_to_Euler',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/String_Array_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/String_Array',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/String_Table_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/String_Table',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Timecode_to_Float',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Vec2_Array_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Vec2_Array',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Vec2_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Vec2',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Vec3_Array_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Vec3_Array',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Vec3_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Vec3',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Vec4_Split',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Vec4',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Datapath_Capture',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/DeckLink_Capture',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/DeckLink_Output',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/Deltacast_Capture',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/GenICam_Capture',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/Magewell_Capture',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/NDI_In',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/NDI_Out',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/Point_Grey_Camera',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/RTMP_Server',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/RTSP_Player',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/Spout_In',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/Spout_Out',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/Video_Capture_(DirectShow)',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/Video_Capture_(V4L)',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/Video_Preview',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/Bezier_Warp',
        destination: '/warping-alignment/bezierwarp',
        permanent: true,
      },
      {
        source: '/nodes/LED_Stripes_Mapper',
        destination: '/warping-alignment/ledstripesmapper',
        permanent: true,
      },
      {
        source: '/nodes/Lens_Distortion',
        destination: '/node-reference/nodes#warp-and-transform',
        permanent: true,
      },
      {
        source: '/nodes/Mask',
        destination: '/warping-alignment/mask',
        permanent: true,
      },
      {
        source: '/nodes/Patch_Replicator',
        destination: '/warping-alignment/patchreplicator',
        permanent: true,
      },
      {
        source: '/nodes/Quad_Grid',
        destination: '/warping-alignment/quadgrid',
        permanent: true,
      },
      {
        source: '/nodes/Quad_Warp',
        destination: '/warping-alignment/quadwarp',
        permanent: true,
      },
      {
        source: '/nodes/Rectangle',
        destination: '/warping-alignment/rectangle',
        permanent: true,
      },
      {
        source: '/nodes/Shape',
        destination: '/node-reference/nodes#warp-and-transform',
        permanent: true,
      },
      {
        source: '/nodes/Soft_Edge_Blender',
        destination: '/warping-alignment/softedgeblender',
        permanent: true,
      },
      {
        source: '/nodes/Transform_2D',
        destination: '/warping-alignment/transform2d',
        permanent: true,
      },
      {
        source: '/nodes/Triangle_Mesh',
        destination: '/warping-alignment/trianglemesh',
        permanent: true,
      },
      {
        source: '/nodes/XGrid',
        destination: '/warping-alignment/xgrid',
        permanent: true,
      },
      {
        source: '/nodes/3D_Camera',
        destination: '/3d-scene/3d-camera',
        permanent: true,
      },
      {
        source: '/nodes/Projector',
        destination: '/node-reference/nodes#3d',
        permanent: true,
      },
      {
        source: '/nodes/Audio_Meter',
        destination: '/node-reference/nodes#audio',
        permanent: true,
      },
      {
        source: '/nodes/Calibration_Export',
        destination: '/node-reference/nodes#auto-calibration',
        permanent: true,
      },
      {
        source: '/nodes/Calibration_Import',
        destination: '/node-reference/nodes#auto-calibration',
        permanent: true,
      },
      {
        source: '/nodes/Art-Net_Timecode_Listener',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Art-Net_Timecode_Sender',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/DMX_Pixel_Mapper',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/On_Item_Finished',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/On_Value_Change',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/Timeline_Marker',
        destination: '/node-reference/nodes#automation',
        permanent: true,
      },
      {
        source: '/nodes/DMX_Receiver',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/DMX_Sender',
        destination: '/node-reference/nodes#communication',
        permanent: true,
      },
      {
        source: '/nodes/Display_Output',
        destination: '/node-reference/nodes#general',
        permanent: true,
      },
      {
        source: '/nodes/Hot_Backup',
        destination: '/node-reference/nodes#general',
        permanent: true,
      },
      {
        source: '/nodes/Color_Space_Transform',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Dilate',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Erode',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Gamma_Correction_File',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Multi_GPU_Image',
        destination: '/node-reference/nodes#image-processing',
        permanent: true,
      },
      {
        source: '/nodes/Equal_Float',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Equal_Int',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Equal_IVec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Equal_Vec2',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Equal_Vec3',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Equal_Vec4',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Round',
        destination: '/node-reference/nodes#math',
        permanent: true,
      },
      {
        source: '/nodes/Equal_String',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Format_String',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Join_String',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Quaternion_to_Vec4',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Split_String',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/Vec4_to_Quaternion',
        destination: '/node-reference/nodes#utility',
        permanent: true,
      },
      {
        source: '/nodes/RTMP_Out',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/SRT_Out',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/Video_Capture_(AVFoundation)',
        destination: '/node-reference/nodes#video-streaming',
        permanent: true,
      },
      {
        source: '/nodes/Mesh_Distort',
        destination: '/node-reference/nodes#warp-and-transform',
        permanent: true,
      },
      {
        source: '/media-playback/media-player-overview',
        destination: '/media-playback/media-player/media-player-overview',
        permanent: true,
      },
      {
        source: '/media-playback/media-player-global-settings',
        destination: '/media-playback/media-player/media-player-global-settings',
        permanent: true,
      },
      {
        source: '/media-playback/creating-managing-playlists',
        destination: '/media-playback/playlists/creating-managing-playlists',
        permanent: true,
      },
      {
        source: '/media-playback/organizing-media-items-in-playlists',
        destination: '/media-playback/playlists/organizing-media-items-in-playlists',
        permanent: true,
      },
      {
        source: '/media-playback/playlists-playback',
        destination: '/media-playback/playlists/playlists-playback',
        permanent: true,
      },
      {
        source: '/media-playback/transformation-properties',
        destination: '/media-playback/playlists/transformation-properties',
        permanent: true,
      },
      {
        source: '/media-playback/media-item-properties',
        destination: '/media-playback/playlists/media-item-properties',
        permanent: true,
      },
      {
        source: '/media-playback/creating-managing-timelines',
        destination: '/media-playback/timelines/creating-managing-timelines',
        permanent: true,
      },
      {
        source: '/media-playback/timeline-view',
        destination: '/media-playback/timelines/timeline-view',
        permanent: true,
      },
      {
        source: '/media-playback/organizing-media-in-timelines',
        destination: '/media-playback/timelines/organizing-media-in-timelines',
        permanent: true,
      },
      {
        source: '/media-playback/timeline-playback',
        destination: '/media-playback/timelines/timeline-playback',
        permanent: true,
      },
      {
        source: '/media-playback/animation-and-keyframing',
        destination: '/media-playback/timelines/animation-and-keyframing',
        permanent: true,
      },
      {
        source: '/media-playback/timeline-markers',
        destination: '/media-playback/timelines/timeline-markers',
        permanent: true,
      },
      {
        source: '/using-notch-blocks',
        destination: '/node-reference/integration-nodes/notchplayback',
        permanent: true,
      },
      {
        source: '/working-with-nodes/node-library/integration-nodes/notchplayback',
        destination: '/node-reference/integration-nodes/notchplayback',
        permanent: true,
      },
      {
        source: '/2_6/:path*',
        destination: 'https://legacy-help.screenberry.com/2_6/:path*',
        permanent: true,
      },
      {
        source: '/2_7/:path*',
        destination: 'https://legacy-help.screenberry.com/2_7/:path*',
        permanent: true,
      },
      {
        source: '/2_8/:path*',
        destination: 'https://legacy-help.screenberry.com/2_8/:path*',
        permanent: true,
      },
      {
        source: '/cn/:path*',
        destination: 'https://cn-help.screenberry.com/:path*',
        permanent: true,
      },
      {
        source: '/mediaplayer',
        destination: '/node-reference/primary-nodes/mediaplayer',
        permanent: true,
      },
      {
        source: '/working-with-nodes/node-library/primary-nodes/mediaplayer',
        destination: '/node-reference/primary-nodes/mediaplayer',
        permanent: true,
      },
      {
        source: '/working-with-nodes/node-library/nodes',
        destination: '/node-reference/nodes',
        permanent: true,
      },
      {
        source: '/automatic-calibration',
        destination: '/automatic-calibration/automatic-calibration-basics',
        permanent: true,
      },
      {
        source: '/patch-editor',
        destination: '/patch-editor/patch-editor-basics',
        permanent: true,
      },
      {
        source: '/3_0_is_coming',
        destination: '/whats-new/release-notes-3-0-0',
        permanent: true,
      },
      {
        source: '/3_0_is_coming/feed',
        destination: '/whats-new/release-notes-3-0-0',
        permanent: true,
      },
      {
        source: '/server-setup-wizard',
        destination: '/getting-started/software',
        permanent: true,
      },
      {
        source: '/setup-wizard',
        destination: '/getting-started/software',
        permanent: true,
      },
    ];

    return createNodeHelpRedirects(redirects, {
      contentRoot: `${projectRoot}/content`,
      locales: guideLocales,
      localizedDestinations: {
        jp: {
          '/3d-scene/3d-model#adding-3d-models': '/3d-scene/3d-model#3d-モデルの追加',
          '/3d-scene/3d-model#saving-3d-models': '/3d-scene/3d-model#3d-モデルの保存',
          '/working-with-nodes/adding-and-managing-nodes#grouping-nodes': '/working-with-nodes/adding-and-managing-nodes#ノードのグループ化',
        },
      },
    });
  },
});
