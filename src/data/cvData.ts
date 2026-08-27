import { PersonalDetails, SkillCategory, EmploymentHistory, EducationItem, LanguageSkill, ProjectInfo } from '../types';

export const personalDetails: PersonalDetails = {
  fullName: "Dieu Tran Khac",
  vietnameseName: "Trần Khắc Điều",
  title: {
    en: "Frontend Software Developer",
    vi: "Kỹ Sư Phần Mềm Frontend (Senior)",
  },
  headline: {
    en: "5+ Years Crafting High-Performing Web & Mobile Experiences",
    vi: "Hơn 5 năm kinh nghiệm phát triển Web & Mobile chuyên sâu với ReactJS, Angular, NextJS",
  },
  summary: {
    en: "5+ years of experience building high-performing web applications using ReactJS, Angular, and NextJS. Skilled in front-end development and UI/UX best practices. Proven ability to self-manage independent projects and collaborate effectively within international cross-functional teams to deliver exceptional results.",
    vi: "Hơn 5 năm kinh nghiệm xây dựng các ứng dụng web và di động hiệu năng cao với ReactJS, Angular, NextJS và React Native. Am hiểu sâu sắc về kiến trúc frontend và tiêu chuẩn UI/UX hiện đại. Có khả năng tự quản lý dự án độc lập, làm việc nhóm hiệu quả và giao tiếp tốt với khách hàng quốc tế (Nhật Bản, Úc, Đức).",
  },
  location: "Cần Thơ, Việt Nam",
  phone: "+84 96929 3735",
  email: "khacdieu1195@gmail.com",
  skype: "live:khacdieu1195 (Dieu Tran)",
  linkedin: "https://www.linkedin.com/in/dieu-tran-19494b222/",
  github: "https://github.com/khacdieu1195",
  status: {
    en: "Available for new opportunities",
    vi: "Sẵn sàng đón nhận cơ hội mới",
  },
  experienceYears: 5,
  completedProjects: 12,
  internationalClients: 3, // Japan, Australia, Germany
};

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: {
      en: 'Core Frontend & Frameworks',
      vi: 'Frontend & Frameworks Cốt Lõi',
    },
    icon: 'Layers',
    skills: [
      {
        name: 'ReactJS / Next.js',
        level: 95,
        category: 'framework',
        badge: 'Chuyên sâu',
        description: {
          en: 'SSR, SPA, Hooks, Custom Hooks, Redux Toolkit, Context API, Performance Optimization',
          vi: 'Kiến trúc SSR, SPA, Custom Hooks, Redux Toolkit, Tối ưu hóa hiệu năng render',
        },
      },
      {
        name: 'Angular (2 - 17+)',
        level: 92,
        category: 'framework',
        badge: 'Chuyên sâu',
        description: {
          en: 'Angular SSR, RxJS, NgRx, Dependency Injection, Modular Architecture, Web Workers',
          vi: 'Angular SSR, xử lý luồng dữ liệu bất đồng bộ với RxJS, NgRx, kiến trúc module',
        },
      },
      {
        name: 'React Native',
        level: 85,
        category: 'framework',
        badge: 'Mobile App',
        description: {
          en: 'Cross-platform mobile apps, Realtime Chat (Linework-like), WebView integration, native bridges',
          vi: 'Phát triển ứng dụng mobile đa nền tảng, Chat thời gian thực, tích hợp WebView',
        },
      },
      {
        name: 'JavaScript (ES6+) & TypeScript',
        level: 95,
        category: 'framework',
        badge: 'Vững chắc',
        description: {
          en: 'Strong typing, Generics, Async/Await, Web APIs, Event Loop, Modern ESNext standards',
          vi: 'Typing chặt chẽ, Generics, tối ưu bất đồng bộ, các chuẩn ECMAScript mới nhất',
        },
      },
      {
        name: 'Redux / State Management',
        level: 90,
        category: 'framework',
        badge: 'Thành thạo',
        description: {
          en: 'Redux, Redux Thunk, Redux Saga, Zustand, Global State Architecture',
          vi: 'Quản lý state quy mô lớn, Redux Saga/Thunk, luồng dữ liệu một chiều ổn định',
        },
      },
      {
        name: 'Three.js & WebGL Basics',
        level: 70,
        category: 'framework',
        badge: '3D Graphics',
        description: {
          en: '3D scene rendering, camera controls, shaders, interactive canvas elements',
          vi: 'Dựng phối cảnh 3D trên nền web, tương tác mô hình canvas',
        },
      },
    ],
  },
  {
    id: 'ui-design',
    title: {
      en: 'UI/UX & Design Systems',
      vi: 'Giao Diện UI/UX & Design Systems',
    },
    icon: 'Palette',
    skills: [
      {
        name: 'HTML5 & Semantic Web',
        level: 98,
        category: 'ui',
        description: {
          en: 'W3C compliant, accessibility (a11y), SEO optimization, responsive markup',
          vi: 'Chuẩn W3C, cấu trúc semantic rõ ràng, tối ưu SEO và Accessibility',
        },
      },
      {
        name: 'CSS3, SASS / SCSS, PostCSS',
        level: 95,
        category: 'ui',
        description: {
          en: 'Flexbox, Grid, CSS animations, mixins, BEM naming convention, CSS variables',
          vi: 'Thành thạo Flexbox, Grid, Animation mượt mà, tiền xử lý SCSS theo chuẩn BEM',
        },
      },
      {
        name: 'Tailwind CSS',
        level: 95,
        category: 'ui',
        badge: 'Ưa thích',
        description: {
          en: 'Utility-first styling, design token systems, dark mode, rapid modern UI build',
          vi: 'Xây dựng UI hiện đại tốc độ cao, hỗ trợ Dark Mode và Design Token',
        },
      },
      {
        name: 'Ant Design & Material UI (MUI)',
        level: 90,
        category: 'ui',
        description: {
          en: 'Enterprise dashboards, complex data tables, form validation, theming',
          vi: 'Xây dựng hệ thống quản trị doanh nghiệp, bảng dữ liệu lớn, custom theme',
        },
      },
      {
        name: 'Bootstrap & Storybook',
        level: 90,
        category: 'ui',
        badge: 'Component Library',
        description: {
          en: 'Isolated UI component development, design system documentation, test fixtures',
          vi: 'Phát triển và tài liệu hóa thư viện UI component độc lập với Storybook',
        },
      },
    ],
  },
  {
    id: 'testing-qa',
    title: {
      en: 'Testing, Quality & CI/CD',
      vi: 'Kiểm Thử & Đảm Bảo Chất Lượng',
    },
    icon: 'CheckCircle2',
    skills: [
      {
        name: 'Cypress (E2E & Automation)',
        level: 88,
        category: 'testing',
        badge: 'E2E Testing',
        description: {
          en: 'End-to-End automation testing for enterprise & e-commerce portals, regression suites',
          vi: 'Viết kịch bản kiểm thử tự động E2E, bảo đảm chất lượng nghiệp vụ phức tạp',
        },
      },
      {
        name: 'Katalon Studio',
        level: 85,
        category: 'testing',
        badge: 'Automation',
        description: {
          en: 'Automated test suite creation for enterprise RBAC and management systems',
          vi: 'Thiết lập quy trình kiểm thử tự động cho hệ thống phân quyền doanh nghiệp',
        },
      },
      {
        name: 'Unit Testing & Debugging',
        level: 90,
        category: 'testing',
        description: {
          en: 'Writing unit tests, browser profiling, Chrome DevTools memory leak detection',
          vi: 'Viết unit test, phân tích hiệu năng, xử lý triệt để memory leak và bug',
        },
      },
      {
        name: 'Code Review & Clean Code',
        level: 92,
        category: 'testing',
        badge: 'Senior Practice',
        description: {
          en: 'Refactoring, enforcing quality-accredited standards, mentoring team members',
          vi: 'Đánh giá code, chuẩn hóa mã nguồn, hướng dẫn các thành viên trong nhóm',
        },
      },
    ],
  },
  {
    id: 'devops-tools',
    title: {
      en: 'Cloud, DevOps & Workflows',
      vi: 'Cloud, DevOps & Công Cụ Dự Án',
    },
    icon: 'Server',
    skills: [
      {
        name: 'Azure & Kubernetes (K8s)',
        level: 80,
        category: 'devops',
        description: {
          en: 'Investigating auto-deploy pipelines, containerized deployment workflows',
          vi: 'Cấu hình auto-deploy với Azure CI/CD và quản lý container trên K8s',
        },
      },
      {
        name: 'Docker & Postman',
        level: 85,
        category: 'devops',
        description: {
          en: 'Containerization for local dev, API testing, mock servers and endpoint verification',
          vi: 'Đóng gói môi trường với Docker, kiểm thử tích hợp API qua Postman',
        },
      },
      {
        name: 'Git & Version Control',
        level: 95,
        category: 'devops',
        description: {
          en: 'Git Flow, conflict resolution, trunk-based development, pull request workflows',
          vi: 'Quy trình Git Flow chuyên nghiệp, quản lý nhánh và merge code an toàn',
        },
      },
      {
        name: 'Jira, Trello & Backlog',
        level: 95,
        category: 'devops',
        description: {
          en: 'Agile/Scrum methodologies, sprint planning, task estimation and milestone tracking',
          vi: 'Làm việc theo mô hình Agile/Scrum, ước lượng thời gian và theo dõi tiến độ',
        },
      },
    ],
  },
];

export const allProjects: ProjectInfo[] = [
  // Deltabrains projects
  {
    id: 'e-contract-app',
    title: {
      en: 'Enterprise E-Contract & Digital Signature System',
      vi: 'Hệ Thống Hợp Đồng Điện Tử & Chữ Ký Số Doanh Nghiệp',
    },
    company: 'Deltabrains',
    time: '2024 — Present',
    clientOrigin: 'Japan',
    clientFlag: '🇯🇵',
    domain: 'Fintech / Legaltech',
    role: {
      en: 'Frontend Developer',
      vi: 'Lập Trình Viên Frontend',
    },
    overview: {
      en: 'A high-security digital contract management platform enabling seamless staff administration, mobile web views, and legal-binding digital signature workflows on mobile devices.',
      vi: 'Nền tảng quản lý hợp đồng điện tử bảo mật cao, hỗ trợ quản trị nhân viên, xem trước hợp đồng trên di động và quy trình ký số điện tử trực tiếp.',
    },
    responsibilities: {
      en: [
        'Developed new core features: staff manager, responsive contract preview web view, and in-app digital signature pad.',
        'Collaborated closely with Japanese stakeholders to confirm UI/UX design specifications and verify technical requirements.',
        'Conducted rigorous cross-device testing, debugging, and optimized touch latency for smooth signature rendering.',
      ],
      vi: [
        'Phát triển các tính năng cốt lõi: Quản lý nhân sự, giao diện xem hợp đồng tối ưu trên WebView di động và module ký điện tử.',
        'Trao đổi trực tiếp với đối tác Nhật Bản để chốt thiết kế UI/UX và đặc tả kỹ thuật.',
        'Kiểm thử đa thiết bị, gỡ lỗi và tối ưu độ nhạy khi ký trên màn hình cảm ứng.',
      ],
    },
    techStack: ['Angular', 'TypeScript', 'HTML5 Canvas', 'SCSS', 'RESTful API', 'Responsive UI'],
    category: 'angular',
    featured: true,
  },
  {
    id: 'lineworks-chat',
    title: {
      en: 'Enterprise Mobile Real-Time Chat Application',
      vi: 'Ứng Dụng Nhắn Tin Doanh Nghiệp Thời Gian Thực (Kiểu LINE WORKS)',
    },
    company: 'Deltabrains',
    time: '2024 — Present',
    clientOrigin: 'Japan',
    clientFlag: '🇯🇵',
    domain: 'Enterprise Communication',
    role: {
      en: 'Mobile & Frontend Developer',
      vi: 'Lập Trình Viên Mobile & Frontend',
    },
    overview: {
      en: 'A high-concurrency corporate messaging mobile app designed for enterprise internal communication, inspired by LINE WORKS features.',
      vi: 'Ứng dụng nhắn tin di động nội bộ dành cho doanh nghiệp với trải nghiệm mượt mà, hỗ trợ gửi tin nhắn thời gian thực, tệp đính kèm và nhóm trò chuyện tương tự LINE WORKS.',
    },
    responsibilities: {
      en: [
        'Implemented end-to-end messaging features: direct chats, group channels, rich media attachments, and read receipts.',
        'Supported and mentored other team members on React Native best practices and state synchronization.',
        'Optimized list rendering performance (virtualized list) for long chat histories and low-end mobile devices.',
        'Assisted project management in investigating and rapidly resolving production environment issues.',
      ],
      vi: [
        'Xây dựng các chức năng trò chuyện: nhắn tin cá nhân, nhóm, chia sẻ tệp đa phương tiện và thông báo trạng thái.',
        'Hỗ trợ và hướng dẫn các thành viên trong nhóm về React Native và quản lý state.',
        'Tối ưu hóa hiệu năng render danh sách tin nhắn dung lượng lớn trên các dòng máy cấu hình thấp.',
        'Hỗ trợ ban quản lý dự án điều tra và khắc phục nhanh các sự cố phát sinh trên môi trường Production.',
      ],
    },
    techStack: ['React Native', 'JavaScript / TypeScript', 'Redux', 'WebSocket', 'Push Notification'],
    category: 'mobile',
    featured: true,
  },
  {
    id: 'action-logs-viewer',
    title: {
      en: 'Enterprise Product Audit & Action Logs Viewer',
      vi: 'Hệ Thống Giám Sát & Truy Vết Nhật Ký Hoạt Động (Action Logs)',
    },
    company: 'Deltabrains',
    time: '2024',
    clientOrigin: 'Japan',
    clientFlag: '🇯🇵',
    domain: 'System Observability',
    role: {
      en: 'Frontend Developer',
      vi: 'Lập Trình Viên Frontend',
    },
    overview: {
      en: 'A dedicated web application providing real-time tracking, filtering, and visual analytics for user activities and security audit logs across multiple client products.',
      vi: 'Ứng dụng web chuyên dụng cho phép theo dõi, lọc nâng cao và phân tích trực quan nhật ký hành động (action logs) của người dùng trên toàn bộ hệ thống sản phẩm.',
    },
    responsibilities: {
      en: [
        'Engineered responsive dashboards with fast multi-criteria log filtering, timestamp sorting, and export capabilities.',
        'Confirmed technical design with Japanese clients, prepared detailed design documentation, and authored comprehensive unit tests.',
      ],
      vi: [
        'Thiết kế giao diện lọc dữ liệu nhật ký đa tiêu chí với tốc độ phản hồi cao và hỗ trợ trích xuất báo cáo.',
        'Chốt thiết kế với khách hàng Nhật Bản, viết tài liệu đặc tả kỹ thuật chi tiết và bộ Unit Test bao phủ.',
      ],
    },
    techStack: ['Angular', 'TypeScript', 'RxJS', 'Ant Design', 'Unit Testing'],
    category: 'angular',
  },
  {
    id: 'enterprise-rbac-portal',
    title: {
      en: 'Comprehensive Organization & RBAC Management Portal',
      vi: 'Cổng Quản Trị Tổ Chức & Phân Quyền Đa Tầng (RBAC Multi-Tenant Portal)',
    },
    company: 'Deltabrains',
    time: '2024',
    clientOrigin: 'Japan',
    clientFlag: '🇯🇵',
    domain: 'Enterprise ERP / Administration',
    role: {
      en: 'Senior Frontend Developer',
      vi: 'Lập Trình Viên Frontend Chính',
    },
    overview: {
      en: 'Centralized administrative portal managing user hierarchies, organization structures, fine-grained role-based permissions (RBAC), and automated data synchronization across all platform modules.',
      vi: 'Cổng quản trị tập trung quản lý thông tin người dùng, cơ cấu tổ chức, phân quyền vai trò chi tiết (RBAC) và đồng bộ dữ liệu giữa tất cả các phân hệ phần mềm.',
    },
    responsibilities: {
      en: [
        'Coded complex administrative views, tree-view organizational charts, and dynamic permission matrices.',
        'Built automated test suites using Katalon Studio for regression and acceptance testing.',
        'Wrote and maintained robust code conforming to strict quality-accredited coding standards.',
        'Provided technical guidance, feasibility evaluations, and software upgrade recommendations to client stakeholders.',
        'Executed debugging, root cause analysis, and performance optimization across data-heavy tables.',
      ],
      vi: [
        'Phát triển giao diện quản trị phức tạp: Cây phân cấp tổ chức, ma trận phân quyền người dùng và đồng bộ dữ liệu đa module.',
        'Xây dựng kịch bản kiểm thử tự động toàn diện với Katalon Studio.',
        'Tuân thủ nghiêm ngặt các tiêu chuẩn chất lượng mã nguồn quốc tế.',
        'Tư vấn kỹ thuật, đánh giá phương án kiến trúc và đề xuất nâng cấp hệ thống cho đối tác.',
        'Gỡ lỗi, chẩn đoán nguyên nhân gốc rễ và tối ưu tốc độ xử lý bảng dữ liệu lớn.',
      ],
    },
    techStack: ['Angular', 'TypeScript', 'Katalon Studio', 'RxJS', 'Material UI / SCSS', 'REST API'],
    category: 'enterprise',
    featured: true,
  },

  // NFQ projects
  {
    id: 'nfq-ecommerce-hub',
    title: {
      en: 'Multi-Marketplace E-Commerce Integration Hub (eMAG, Etsy, ManoMano)',
      vi: 'Cổng Tích Hợp & Quản Trị Đa Kênh Thương Mại Điện Tử Quốc Tế',
    },
    company: 'NFQ',
    time: '2022 — 2023',
    clientOrigin: 'Germany',
    clientFlag: '🇩🇪',
    domain: 'E-Commerce Marketplace',
    role: {
      en: 'Frontend Developer',
      vi: 'Lập Trình Viên Frontend',
    },
    overview: {
      en: 'A high-scale e-commerce management platform connecting merchant shops with major European marketplaces (eMAG Marketplace, Etsy, ManoMano) to unify product catalogs, inventory sync, and order workflows.',
      vi: 'Hệ thống quản lý thương mại điện tử quy mô lớn kết nối các cửa hàng với sàn thương mại điện tử hàng đầu châu Âu (eMAG, Etsy, ManoMano), đồng bộ hóa đơn hàng, tồn kho và danh mục sản phẩm.',
    },
    responsibilities: {
      en: [
        'Built modern portal management interfaces utilizing ReactJS and an isolated component library documented in Storybook.',
        'Authored robust unit tests and end-to-end automation test suites using Cypress to safeguard multi-shop checkout and order sync.',
        'Investigated and implemented automated CI/CD deployment workflows with Azure and Kubernetes (K8s).',
        'Developed new features, optimized codebase performance, and conducted thorough peer code reviews for team members.',
      ],
      vi: [
        'Xây dựng các giao diện quản trị bán hàng hiện đại bằng ReactJS kết hợp hệ thống component chuẩn hóa trên Storybook.',
        'Viết kịch bản kiểm thử tự động E2E và Unit Test bằng Cypress đảm bảo luồng xử lý đơn hàng chính xác tuyệt đối.',
        'Nghiên cứu và thiết lập quy trình tự động triển khai (Auto-deploy) với Azure CI/CD và Kubernetes (K8s).',
        'Tối ưu hóa cấu trúc mã nguồn, nâng cao hiệu năng render và thực hiện Code Review định kỳ cho toàn đội ngũ.',
      ],
    },
    techStack: ['ReactJS', 'Storybook', 'Cypress', 'TypeScript', 'Redux', 'Azure', 'Kubernetes (K8s)', 'Tailwind CSS'],
    category: 'ecommerce',
    featured: true,
  },

  // AppCore projects
  {
    id: 'appcore-livestream-social',
    title: {
      en: 'Live-Stream & Social Streaming Web Platform (Janus WebRTC)',
      vi: 'Mạng Xã Hội Trực Tuyến & Nền Tảng Live-Stream Video (Janus WebRTC)',
    },
    company: 'AppCore',
    time: '2019 — 2021 (2 years)',
    clientOrigin: 'Australia',
    clientFlag: '🇦🇺',
    domain: 'Live Streaming / Media / Social',
    role: {
      en: 'Frontend Developer',
      vi: 'Lập Trình Viên Frontend',
    },
    overview: {
      en: 'A next-generation social networking and evening live-streaming web platform supporting ultra-low-latency video broadcast, interactive round-table panels, and role-based portals for Hosts, Sponsors, and Speakers.',
      vi: 'Nền tảng mạng xã hội và phát video trực tuyến (Live-streaming & Video on Demand) với độ trễ siêu thấp, hỗ trợ phòng thảo luận bàn tròn tương tác và phân hệ riêng biệt cho Host, Nhà tài trợ và Diễn giả.',
    },
    responsibilities: {
      en: [
        'Architected high-performance Angular SSR (Server-Side Rendering) architecture for fast SEO-ready landing pages.',
        'Researched and integrated Janus WebRTC server to power live interactive video streams and multi-user round table discussions.',
        'Built full portal suites for Hosts, Event Sponsors, and Guest Speakers.',
        'Managed tasks, sprint backlogs, and client communication using Trello.',
      ],
      vi: [
        'Xây dựng kiến trúc Angular SSR (Server-Side Rendering) giúp tối ưu hóa SEO và tải trang cực nhanh.',
        'Nghiên cứu và tích hợp máy chủ Janus WebRTC phục vụ phát sóng trực tiếp độ trễ thấp và phòng họp bàn tròn nhiều người.',
        'Xây dựng hệ thống phân hệ cổng thông tin (Portal) chuyên biệt cho Host, Nhà tài trợ (Sponsor) và Diễn giả (Speaker).',
        'Quản lý tiến độ dự án và phối hợp chặt chẽ với khách hàng thông qua Trello.',
      ],
    },
    techStack: ['Angular SSR', 'Janus WebRTC', 'TypeScript', 'SCSS', 'WebSockets', 'Trello / Agile'],
    category: 'angular',
    featured: true,
  },
  {
    id: 'appcore-telemedicine',
    title: {
      en: 'Telemedicine & Online Medical Examination Platform',
      vi: 'Nền Tảng Khám Chữa Bệnh Trực Tuyến & Quản Lý Hồ Sơ Bệnh Án',
    },
    company: 'AppCore',
    time: '2018 — 2019 (1 year)',
    clientOrigin: 'Australia',
    clientFlag: '🇦🇺',
    domain: 'Healthcare / Telehealth',
    role: {
      en: 'Frontend Developer',
      vi: 'Lập Trình Viên Frontend',
    },
    overview: {
      en: 'A comprehensive digital healthcare solution featuring a mobile application for patients and a specialized doctor web portal for video consultations, electronic prescriptions, and medical history tracking.',
      vi: 'Giải pháp y tế số toàn diện bao gồm ứng dụng di động cho bệnh nhân và cổng thông tin web cho bác sĩ để khám bệnh qua video, kê đơn thuốc điện tử và theo dõi lịch sử khám.',
    },
    responsibilities: {
      en: [
        'Analyzed client healthcare requirements and mapped functional specifications with the engineering team.',
        'Used Angular 8 to engineer doctor consultation portals with Dockerized WebRTC call handlers.',
        'Implemented electronic medical prescription dispatch and call history logs (accepted/missed calls).',
        'Conducted thorough cross-browser testing and bug fixes to ensure 99.9% uptime reliability.',
      ],
      vi: [
        'Phân tích yêu cầu nghiệp vụ y tế của khách hàng và lập danh mục chức năng cùng đội ngũ phát triển.',
        'Sử dụng Angular 8 xây dựng giao diện khám bệnh cho bác sĩ, kết nối hệ thống nhận cuộc gọi qua Docker.',
        'Phát triển tính năng kê đơn thuốc trực tuyến và theo dõi lịch sử cuộc gọi khám bệnh (đã tiếp nhận / cuộc gọi nhỡ).',
        'Kiểm thử tương thích, trao đổi kỹ thuật và khắc phục sự cố phần mềm.',
      ],
    },
    techStack: ['Angular 8', 'WebRTC Video Call', 'Docker', 'TypeScript', 'Bootstrap', 'REST API'],
    category: 'angular',
  },
  {
    id: 'appcore-flight-management',
    title: {
      en: 'Airline Flight Operations & Passenger Revenue Portal',
      vi: 'Hệ Thống Điều Hành Chuyến Bay & Quản Lý Doanh Thu Hàng Không',
    },
    company: 'AppCore',
    time: '2017 — 2018 (1 year)',
    clientOrigin: 'Australia',
    clientFlag: '🇦🇺',
    domain: 'Aviation & Travel Management',
    role: {
      en: 'Frontend Developer',
      vi: 'Lập Trình Viên Frontend',
    },
    overview: {
      en: 'An operations management portal enabling airline staff to schedule flights, track passenger occupancy, monitor revenue KPIs, and manage flight rosters.',
      vi: 'Cổng điều hành chuyến bay cho phép theo dõi lịch bay, số lượng hành khách, doanh thu và kiểm soát các chỉ số vận hành hàng không theo thời gian thực.',
    },
    responsibilities: {
      en: [
        'Built real-time flight management dashboard displaying active flights, seat occupancy, and revenue charts.',
        'Designed interactive mock-ups and supported quality assurance team with rigorous test cases.',
        'Collaborated on customer requirement breakdowns and functional estimations.',
      ],
      vi: [
        'Xây dựng giao diện bảng điều khiển quản lý chuyến bay, thống kê số lượng hành khách và biểu đồ doanh thu.',
        'Thiết kế giao diện mẫu (mock-up) và hỗ trợ đội ngũ kiểm thử xây dựng kịch bản kiểm tra chất lượng.',
        'Phân tích yêu cầu và ước lượng khối lượng công việc cùng các thành viên trong nhóm.',
      ],
    },
    techStack: ['Angular', 'TypeScript', 'Chart.js / Data Viz', 'SCSS', 'Bootstrap', 'REST API'],
    category: 'angular',
  },
  {
    id: 'appcore-other-projects',
    title: {
      en: 'Specialized Web Solutions Suite (E-Fair, Restaurant & Multilingual Portal)',
      vi: 'Tập Hợp Dự Án Mở Rộng (Hội Chợ Trực Tuyến, Quản Lý Chuỗi Nhà Hàng & Dịch Thuật)',
    },
    company: 'AppCore',
    time: '2016 — 2018',
    clientOrigin: 'Global / Multi-client',
    clientFlag: '🌐',
    domain: 'Multi-industry',
    role: {
      en: 'Frontend Developer',
      vi: 'Lập Trình Viên Frontend',
    },
    overview: {
      en: 'A series of specialized client products including an Online Fair marketplace, restaurant chain operations portal, crypto wallet landing pages, and multilingual passport translation tools.',
      vi: 'Chuỗi các dự án chuyên biệt bao gồm: Sàn hội chợ trực tuyến (tìm kiếm, đàm phán giá, giỏ hàng, quản lý gian hàng), cổng quản lý chuỗi nhà hàng, landing page ví điện tử và website hỗ trợ biên dịch hộ chiếu đa ngôn ngữ.',
    },
    responsibilities: {
      en: [
        'Developed Online Fair marketplace with search, price offering, cart checkout, and organizer booth management.',
        'Engineered Restaurant Chain Manager for order dispatch and menu tracking.',
        'Crafted animated landing pages for next-gen financial wallet applications.',
        'Built multilingual translation tool for passport and identity document localization.',
      ],
      vi: [
        'Phát triển website hội chợ trực tuyến: Tìm kiếm sản phẩm, thương lượng giá (offer), giỏ hàng, thanh toán và quản lý gian hàng.',
        'Xây dựng hệ thống quản lý chuỗi nhà hàng ẩm thực.',
        'Thiết kế landing page giới thiệu ứng dụng ví điện tử thế hệ mới.',
        'Xây dựng công cụ hỗ trợ phiên dịch viên chuyển ngữ hộ chiếu và giấy tờ tùy thân.',
      ],
    },
    techStack: ['ReactJS', 'Angular', 'JavaScript', 'HTML5 / CSS3', 'Bootstrap', 'jQuery'],
    category: 'enterprise',
  },
];

export const employmentHistories: EmploymentHistory[] = [
  {
    id: 'deltabrains',
    company: 'Deltabrains',
    role: {
      en: 'Front-end Developer',
      vi: 'Lập Trình Viên Front-end',
    },
    location: 'Can Tho, Vietnam',
    period: {
      en: 'February 2024 — Present',
      vi: 'Tháng 02/2024 — Hiện tại',
    },
    isCurrent: true,
    summary: {
      en: 'Leading frontend and mobile development for high-profile Japanese clients, encompassing e-contract systems, enterprise chat solutions, action logs viewers, and granular RBAC portals.',
      vi: 'Chịu trách nhiệm phát triển Frontend & Mobile cho các đối tác Nhật Bản, bao gồm hệ thống hợp đồng số, ứng dụng nhắn tin doanh nghiệp, hệ thống kiểm toán log và cổng quản trị phân quyền RBAC.',
    },
    projects: allProjects.filter((p) => p.company === 'Deltabrains'),
  },
  {
    id: 'nfq',
    company: 'NFQ Asia',
    role: {
      en: 'Front-end Developer',
      vi: 'Lập Trình Viên Front-end',
    },
    location: 'Can Tho, Vietnam',
    period: {
      en: 'January 2022 — December 2023',
      vi: 'Tháng 01/2022 — Tháng 12/2023 (2 năm)',
    },
    summary: {
      en: 'Engineered high-scale e-commerce integration hub connecting leading European marketplaces (eMAG, Etsy, ManoMano) with ReactJS, Storybook, Cypress test automation, and Azure/K8s CI/CD.',
      vi: 'Phát triển nền tảng tích hợp thương mại điện tử kết nối các sàn hàng đầu châu Âu (eMAG, Etsy, ManoMano) bằng ReactJS, Storybook, kiểm thử tự động Cypress và triển khai tự động qua Azure & Kubernetes.',
    },
    projects: allProjects.filter((p) => p.company === 'NFQ'),
  },
  {
    id: 'appcore',
    company: 'AppCore',
    role: {
      en: 'Front-end Developer',
      vi: 'Lập Trình Viên Front-end',
    },
    location: 'Can Tho, Vietnam',
    period: {
      en: 'May 2016 — November 2021',
      vi: 'Tháng 05/2016 — Tháng 11/2021 (5.5 năm)',
    },
    summary: {
      en: 'Delivered foundational frontend architecture for Australian clients across WebRTC live-streaming networks, telemedicine platforms, airline flight management portals, and multi-industry applications.',
      vi: 'Phát triển nhiều hệ thống trọng yếu cho đối tác Úc và quốc tế: Mạng xã hội livestream Janus WebRTC, hệ thống y tế khám bệnh từ xa, cổng điều hành chuyến bay và các dự án sàn thương mại, chuỗi nhà hàng.',
    },
    projects: allProjects.filter((p) => p.company === 'AppCore'),
  },
];

export const educations: EducationItem[] = [
  {
    degree: {
      en: 'Diploma of Information Technology',
      vi: 'Bằng Cử Nhân / Cao Đẳng Công Nghệ Thông Tin',
    },
    institution: 'Can Tho University (Đại Học Cần Thơ)',
    period: '08/2013 — 12/2016',
    location: 'Can Tho, Viet Nam',
    description: {
      en: 'Major in Information Technology. Strong foundation in software engineering, algorithms, data structures, and web technologies.',
      vi: 'Chuyên ngành Công nghệ Thông tin. Nền tảng vững chắc về kỹ thuật phần mềm, cấu trúc dữ liệu và giải thuật, công nghệ web hiện đại.',
    },
  },
  {
    degree: {
      en: 'HDSE (Higher Diploma in Software Engineering)',
      vi: 'Chứng Chỉ Lập Trình Viên Quốc Tế HDSE',
    },
    institution: 'Can Tho University Software Center (CUSC)',
    period: '08/2013 — 12/2016',
    location: 'Can Tho, Viet Nam',
    description: {
      en: 'Comprehensive professional software development program focusing on enterprise web development, database architecture, and teamwork standards.',
      vi: 'Chương trình đào tạo chuyên sâu về quy trình phát triển phần mềm chuẩn quốc tế, kiến trúc ứng dụng doanh nghiệp và kỹ năng làm việc nhóm.',
    },
  },
];

export const languages: LanguageSkill[] = [
  {
    name: {
      en: 'English',
      vi: 'Tiếng Anh',
    },
    level: 'Professional Working Proficiency',
    percent: 85,
    note: {
      en: '5+ years collaborating with international clients & stakeholders from Japan, Australia, and Germany.',
      vi: 'Hơn 5 năm kinh nghiệm làm việc và trao đổi trực tiếp với khách hàng từ Nhật Bản, Úc, Đức.',
    },
  },
  {
    name: {
      en: 'Vietnamese',
      vi: 'Tiếng Việt',
    },
    level: 'Native Speaker',
    percent: 100,
    note: {
      en: 'Native language with excellent verbal and written technical communication.',
      vi: 'Tiếng mẹ đẻ, giao tiếp và soạn thảo tài liệu kỹ thuật chuẩn xác, lưu loát.',
    },
  },
];

export const hobbies = [
  {
    name: { en: 'Walking & Outdoor', vi: 'Đi bộ & Hoạt động ngoài trời' },
    icon: 'Footprints',
    desc: { en: 'Enjoying fresh air and morning walks', vi: 'Thư giãn tái tạo năng lượng' },
  },
  {
    name: { en: 'Travel & Exploration', vi: 'Du lịch & Khám phá' },
    icon: 'Compass',
    desc: { en: 'Exploring diverse cultures and landscapes', vi: 'Khám phá văn hóa và vùng đất mới' },
  },
  {
    name: { en: 'Gaming & Tech', vi: 'Chơi game & Khám phá công nghệ' },
    icon: 'Gamepad2',
    desc: { en: 'Strategy games, tech trends, creative UX', vi: 'Game chiến thuật và trải nghiệm UI/UX sáng tạo' },
  },
];
