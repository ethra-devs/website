import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Timeline } from "antd";
import "antd/dist/antd.css";
import { Box, HStack, Icon, VStack } from "@chakra-ui/react";

import { TimelineCard } from "./timelineCard";
import {
  FcEngineering,
  FcRatings,
  FcDiploma1,
  FcDiploma2,
  FcCollaboration,
  FcPhone,
} from "react-icons/fc";

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react";

let data = {
  contact: {
    icon: FcPhone,
    title: "Contact",
    description: "request an audit with details about your team and project",
  },
  quote: {
    icon: FcCollaboration,
    title: "Quote",
    description: "we organize a kick-off meeting and provide a quote",
  },
  audit: {
    icon: FcRatings,
    title: "Audit",
    description: "we certify the security of your smart contracts",
  },
  report: {
    icon: FcDiploma2,
    title: "Report",
    description: "we privately send your team a detailed audit report",
  },
  fixes: {
    icon: FcEngineering,
    title: "Fixes",
    description: "your team fixes the issues and implements best practices",
  },
  certify: {
    icon: FcDiploma1,
    title: "Certify",
    description: "we send you an updated audit report and certificate",
  },
};

export const ServicesTimeline = () => (
  <Box
    height={"90%"}
    width={"90%"}
    m={10}
    padding={10}
    background={"blackAlpha.200"}
    borderRadius={"30px"}
    overflow={"scroll"}
    zIndex={5}>
    <Timeline
      mode="alternate"
      pending={<TimelineCard {...data.contact} />}
      reverse={true}
      style={{
        backgroundColor: "transparent",
      }}>
      <Timeline.Item
        dot={
          <CheckCircleOutlined
            style={{
              fontSize: "26px",
              backgroundColor: "transparent",
            }}
          />
        }></Timeline.Item>
      <Timeline.Item>
        <TimelineCard {...data.certify} />
      </Timeline.Item>
      <Timeline.Item color="red">
        <TimelineCard {...data.fixes} />
      </Timeline.Item>
      <Timeline.Item
        dot={
          <ClockCircleOutlined
            style={{
              fontSize: "16px",
            }}
          />
        }>
        <TimelineCard {...data.report} />
      </Timeline.Item>
      <Timeline.Item color="green">
        <TimelineCard {...data.audit} />
      </Timeline.Item>
      <Timeline.Item>
        <TimelineCard {...data.quote} />
      </Timeline.Item>
    </Timeline>
  </Box>
);
