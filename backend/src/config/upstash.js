import {Ratelimit} from "@upstash/ratelimit"; // for IP rate limiting
import {Redis} from "@upstash/redis";
import dotenv from "dotenv";

dotenv.config();
// Create a new ratelimiter, that allows 100 requests per 60 seconds

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: Ratelimit.slidingWindow(100, "60 s"),
})

export default ratelimit;
