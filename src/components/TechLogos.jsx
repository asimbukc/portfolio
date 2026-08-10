import { FaReact, FaNodeJs, FaDocker, FaGitAlt, FaCogs } from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiTypescript, 
  SiTailwindcss, 
  SiPostgresql, 
  SiGraphql, 
  SiRedux, 
  SiRedis, 
  SiPrisma, 
  SiFigma 
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { IoSpeedometerOutline } from 'react-icons/io5';

export const ReactLogo = ({ className = "w-8 h-8" }) => <FaReact className={className} color="#61DAFB" />;
export const NextjsLogo = ({ className = "w-8 h-8" }) => <SiNextdotjs className={className} color="#ffffff" />;
export const NodejsLogo = ({ className = "w-8 h-8" }) => <FaNodeJs className={className} color="#339933" />;
export const ExpressLogo = ({ className = "w-8 h-8" }) => <SiExpress className={className} color="#ffffff" />;
export const MongoLogo = ({ className = "w-8 h-8" }) => <SiMongodb className={className} color="#13AA52" />;
export const TypescriptLogo = ({ className = "w-8 h-8" }) => <SiTypescript className={className} color="#3178C6" />;
export const TailwindLogo = ({ className = "w-8 h-8" }) => <SiTailwindcss className={className} color="#38BDF8" />;
export const PostgresLogo = ({ className = "w-8 h-8" }) => <SiPostgresql className={className} color="#336791" />;
export const DockerLogo = ({ className = "w-8 h-8" }) => <FaDocker className={className} color="#1D63ED" />;
export const GitLogo = ({ className = "w-8 h-8" }) => <FaGitAlt className={className} color="#F05032" />;
export const RestApiLogo = ({ className = "w-8 h-8" }) => <TbApi className={className} color="#0D9488" />;
export const UiUxLogo = ({ className = "w-8 h-8" }) => <SiFigma className={className} color="#F24E1E" />;
export const PerfLogo = ({ className = "w-8 h-8" }) => <IoSpeedometerOutline className={className} color="#EAB308" />;
export const GraphqlLogo = ({ className = "w-8 h-8" }) => <SiGraphql className={className} color="#E535AB" />;
export const ReduxLogo = ({ className = "w-8 h-8" }) => <SiRedux className={className} color="#764ABC" />;
export const RedisLogo = ({ className = "w-8 h-8" }) => <SiRedis className={className} color="#DC382D" />;
export const BullMqLogo = ({ className = "w-8 h-8" }) => <FaCogs className={className} color="#F97316" />;
export const PrismaLogo = ({ className = "w-8 h-8" }) => <SiPrisma className={className} color="#7DD3FC" />;
