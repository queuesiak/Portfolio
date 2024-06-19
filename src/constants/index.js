import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  MySQL,
  git,
  systaldyn,
  solidity,
  blockchain,
  polygon,
  obstacle,
  Damagesense,
  meta,
  x,
  gmail,
  githublogo,
  linkedin,
  bluetoothcar,
  robot,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "resume",
    title: "Resume",
    link: "https://drive.google.com/file/d/1b7ylfuxuzQgr9YbsZxkxejANkNqgyUHS/view?usp=sharing"},
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Robotics",
    icon: web,
  },
  {
    title: "Automation",
    icon: mobile,
  },
  {
    title: "RPA",
    icon: backend,
  },
  {
    title: "ROS",
    icon: creator,
  },
];

const technologies = [

];

const experiences = [
  
  {
    title: "ROBOTICS INTERN",
    company_name: "Systaldyn Pvt. Ltd.",
    icon: systaldyn,
    iconBg: "#383E56",
    date: "March 2024 - Current",
    points: [
      "Smart Asset Management: Monitor and manage assets in real-time, optimize asset utilization, and reduce downtime.",
      "Data Analytics and Visualization: Collect, analyze, and visualize data from IoT devices to gain actionable insights for better decision-making.",
      "Predictive Maintenance: Implement predictive maintenance strategies to identify potential equipment failures before they occur, minimizing downtime and maintenance costs.",
      "Designed and implemented features for asset creation, image uploads, data input, and PDF attachment functionalities. Managed backend development using Node.js APIs to ensure efficient asset information management and data retrieval.",
      "Energy Management: Optimize energy consumption and reduce costs by implementing IoT-enabled energy management systems.",
    ],
  },
];

const testimonials = [
  

];

const projects = [
  {
    name: "Damage Detection System",
    description:
      "Developed and implemented a sensor-based system to detect damage in shipped products.Designed algorithms for data analysis and anomaly detection using microcontrollers.Integrated system with website for real-time data upload and visualization through graphs.",
    tags: [
      {
        name: "Arduino",
        color: "blue-text-gradient",
      },
      {
        name: "Load cell",
        color: "green-text-gradient",
      },
      {
        name: "Accelerometer",
        color: "pink-text-gradient",
      },
      
    ],
    image: Damagesense,
    
  },
  {
    name: "Metaverse Integration with Real-World Sensors",
    description:
      "•	Integrated real-world sensors with the metaverse to enable interaction between physical actions and virtual environments.Developed protocols for synchronizing actions, such as turning on a fan in the real world and mirroring it in the metaverse augmented world.",
    tags: [
      {
        name: "ESP-32",
        color: "blue-text-gradient",
      },
      {
        name: "Relay",
        color: "green-text-gradient",
      },
    
    ],
    image: meta,
    
  },
  {
    name: "Obstacle Avoiding Vehicle",
    description:
      "Built an Arduino Uno controlled car with obstacle avoidance. The car utilizes an ultrasonic sensor to detect objects and a L293D motor driver shield for maneuverability. This project demonstrates skills in embedded systems, sensor integration, and autonomous control",
    tags: [
      {
        name: "Servo",
        color: "blue-text-gradient",
      },
      {
        name: "Ulrasonic Sensor",
        color: "green-text-gradient",
      },
      
    ],
    image: obstacle,
    
  },
  {
    name: "Remote Control Car",
    description:
      "Built Bluetooth-controlled car with Arduino Uno & HC-05. Smartphone commands car via Bluetooth, L298N controls motors for movement. Showcases skills in microcontroller programming, wireless communication, and motor control.",
    tags: [
      {
        name: "Microcontroller",
        color: "blue-text-gradient",
      },
      {
        name: "HC-05",
        color: "green-text-gradient",
      },
      
      
    ],
    image: bluetoothcar,
    
  },
  {
    name: "Robotic wireless ARM",
    description:
      "Crafted Bluetooth-controlled robotic arm using Arduino Uno. Servo motors maneuvered via wireless commands for precise manipulation. Demonstrates skills in embedded systems, servo control, and Bluetooth communication.",
    tags: [
      {
        name: "Servo",
        color: "blue-text-gradient",
      },
      {
        name: "HC-05",
        color: "green-text-gradient",
      },
      {
        name: "Arduino Uno",
        color: "pink-text-gradient",
      },
      
    ],
    image: robot,
    
  },
  
];

export { services, technologies, experiences, testimonials, projects };
