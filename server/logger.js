import winston from "winston";
import ecsFormat from "@elastic/ecs-winston-format";

const logger = winston.createLogger({
    level: 'debug',
    format: ecsFormat({ convertReqRes: true }),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: 'logs/log.json'
        })
    ]
})

export default logger;
