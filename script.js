const quotes = [
    "Firewalls are like barriers between worlds — only true intent can cross.",
    "Hackers aren't enemies of order — they're scouts of freedom.",
    "In the Wired, identity is just another packet waiting to be traced.",
    "If the world denies me admin rights, I'll root it myself.",
    "Discipline is the only patch that never fails.",
    "We are all connected — but do you know who's watching the connection?"
];

function rotateQuotes() {
    const el = document.getElementById("rotating-quote");
    if (!el) return;
    let i = 0;
    el.textContent = quotes[i];
    setInterval(() => {
        i = (i + 1) % quotes.length;
        el.textContent = quotes[i];
        el.style.animation = 'none';
        setTimeout(() => {
            el.style.animation = 'blinkThenGlow 4s ease-in-out forwards';
        }, 10);
    }, 5000);
}

function setYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = new Date().getFullYear();
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -100px 0px' };
const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section, .skill-card, .project-card, .article-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

function createParticle() {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: fixed;
        width: 2px;
        height: 2px;
        background: #08CB00;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        box-shadow: 0 0 5px #08CB00;
        left: ${Math.random() * window.innerWidth}px;
        top: ${Math.random() * window.innerHeight}px;
    `;
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 2000);
}
setInterval(createParticle, 300);

const glitchText = document.querySelector('.glitch-text');
if (glitchText) {
    setInterval(() => {
        glitchText.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #08CB00,
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 #9929EA
        `;
        setTimeout(() => { glitchText.style.textShadow = '0 0 20px #08CB00'; }, 100);
    }, 3000);
}

const createScrollIndicator = () => {
    const indicator = document.createElement('div');
    indicator.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #08CB00, #9929EA);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(indicator);
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        indicator.style.width = (winScroll / height) * 100 + '%';
    });
};
createScrollIndicator();

/* -------------------- Updated Articles -------------------- */
const articleContent = {
    ai_cyber: {
        title: "Applications of Artificial Intelligence in Cyber Security",
        content: `
            <p>In today's digital world, cyber threats are growing more advanced, frequent, and unpredictable. From ransomware attacks to phishing and data breaches, organizations are under constant pressure to protect their digital assets. Traditional cybersecurity techniques—based on predefined rules and human monitoring—are no longer enough to keep up with this rapidly changing landscape.</p>
            
            <p>This is where Artificial Intelligence (AI) has emerged as a game-changer. AI brings automation, speed, and intelligence to cybersecurity operations, helping detect, prevent, and respond to attacks faster than ever before. This article explores how AI is applied in cybersecurity, its benefits, challenges, and the future potential of this integration.</p>

            <h3>1. Understanding AI in Cybersecurity</h3>
            <p>Artificial Intelligence refers to the ability of machines to perform tasks that typically require human intelligence, such as learning, reasoning, and decision-making. When combined with cybersecurity, AI systems analyze vast amounts of data from network logs, endpoints, and applications to identify patterns of normal and abnormal behavior.</p>
            
            <p>Instead of waiting for known attack signatures, AI-driven systems can learn from experience and detect anomalies that may indicate new or unseen threats. This predictive capability makes AI especially valuable in defending against sophisticated and evolving cyberattacks.</p>

            <h3>2. Key Applications of AI in Cybersecurity</h3>
            
            <h4>a) Threat Detection and Prevention</h4>
            <p>Traditional antivirus and intrusion detection systems rely on known threat signatures. However, attackers constantly change their tactics, making static defenses ineffective. AI-powered systems, especially those using machine learning (ML), can analyze billions of data points from emails, web traffic, and system logs to detect unusual patterns that might indicate an intrusion or malware infection.</p>
            
            <p>For example, ML models can identify abnormal login behavior, such as access from an unusual location or time, and raise alerts automatically. This reduces the time needed for security teams to detect and respond to threats.</p>

            <h4>b) Phishing Detection</h4>
            <p>Phishing remains one of the most common cyber threats worldwide. AI tools can analyze the language, structure, and metadata of emails to detect subtle signs of phishing attempts that humans might miss.</p>
            
            <p>Natural Language Processing (NLP), a branch of AI, can be trained to recognize fraudulent communication by examining tone, grammar, and urgency indicators often used in phishing messages. As a result, AI-based email filters are now capable of blocking malicious emails before they reach the inbox.</p>

            <h4>c) Malware Analysis</h4>
            <p>AI is used in automated malware classification and analysis, helping cybersecurity experts understand how a piece of malicious code behaves. By examining the characteristics of files—such as API calls, permissions, and runtime behavior—AI models can classify whether a file is safe or potentially harmful.</p>
            
            <p>This capability speeds up incident response and limits damage, especially in environments like enterprise networks or cloud systems where millions of files are exchanged daily.</p>

            <h4>d) Network Security Monitoring</h4>
            <p>Modern networks generate massive volumes of data, making manual monitoring impractical. AI systems equipped with behavioral analytics continuously observe user and system activities to establish a "normal" baseline. Any deviation—such as an unusual data transfer or a sudden spike in network traffic—can trigger automated alerts or even block access temporarily.</p>
            
            <p>This proactive approach allows organizations to identify insider threats or compromised accounts before serious damage occurs.</p>

            <h4>e) Incident Response and Automation</h4>
            <p>AI-driven Security Orchestration, Automation, and Response (SOAR) platforms help automate repetitive tasks such as log collection, alert triage, and initial incident response. By using AI to prioritize alerts based on severity and context, security teams can focus on high-risk issues instead of wasting time on false positives.</p>
            
            <p>Some AI systems can even take direct actions—like isolating a compromised endpoint or resetting a user's credentials—without waiting for human approval, significantly reducing response time.</p>

            <h4>f) Identity and Access Management (IAM)</h4>
            <p>AI enhances identity verification through biometric recognition systems such as facial recognition, voice analysis, and behavioral biometrics. These technologies help ensure that only legitimate users gain access to sensitive systems, even if passwords are stolen.</p>
            
            <p>Additionally, AI algorithms can monitor access patterns to detect anomalies, such as a user suddenly attempting to access files unrelated to their role.</p>

            <h3>3. Benefits of Using AI in Cybersecurity</h3>
            <p><strong>Speed and Efficiency:</strong> AI can process and analyze massive datasets in seconds, helping identify potential threats much faster than humans.</p>
            
            <p><strong>Predictive Defense:</strong> Machine learning enables systems to forecast future attacks based on patterns, preventing breaches before they occur.</p>
            
            <p><strong>Reduced Human Error:</strong> Automating repetitive security tasks minimizes mistakes that can result from fatigue or oversight.</p>
            
            <p><strong>Adaptive Learning:</strong> AI models continuously improve by learning from new data, allowing defenses to evolve alongside emerging threats.</p>

            <h3>4. Challenges and Limitations</h3>
            <p>While AI significantly strengthens cybersecurity, it also introduces new challenges:</p>
            
            <p><strong>Data Quality:</strong> AI models depend on high-quality and diverse datasets. Poor or biased data can lead to inaccurate predictions.</p>
            
            <p><strong>Adversarial AI:</strong> Cybercriminals are now using AI to develop more deceptive phishing campaigns and evade detection. Attackers can even manipulate AI models through "poisoned data" to make them less effective.</p>
            
            <p><strong>High Implementation Costs:</strong> Setting up and maintaining AI-driven cybersecurity systems requires skilled professionals and significant investment.</p>
            
            <p><strong>Lack of Explainability:</strong> AI decisions, especially from deep learning models, are often hard to interpret. Understanding why an AI flagged a specific event as malicious is crucial for trust and compliance.</p>

            <h3>5. The Future of AI in Cybersecurity</h3>
            <p>The next generation of cybersecurity will rely heavily on AI-Augmented Security Operations Centers (SOCs), where humans and intelligent systems work side by side. AI will handle data-intensive tasks—threat detection, triage, and response—while humans will focus on strategic decisions and threat hunting.</p>
            
            <p>In addition, the integration of AI with blockchain, zero-trust architecture, and quantum computing is expected to redefine data protection. The focus will shift from reactive security to autonomous prevention systems that can predict, adapt, and respond to attacks in real time.</p>
            
            <p>However, as defensive AI evolves, so will offensive AI. Continuous research, regulation, and ethical use will be essential to maintain balance and prevent misuse.</p>

            <h3>6. Conclusion</h3>
            <p>Artificial Intelligence has transformed the way organizations defend against cyber threats. Its ability to analyze complex data, recognize hidden patterns, and make real-time decisions has made cybersecurity faster, smarter, and more proactive.</p>
            
            <p>While challenges such as cost, explainability, and adversarial attacks remain, the benefits far outweigh the risks. In the coming years, AI will not just support cybersecurity—it will become its backbone.</p>
            
            <p>For professionals and students in cybersecurity, learning AI-driven tools and techniques is no longer optional. It is the next frontier for building resilient and intelligent digital defenses.</p>
        `,
        author: "Prisha Sharma | Cybersecurity Enthusiast | Lifelong Learner | Exploring AI-driven Security"
    },
    
    etl: {
        title: "The ETL Process: Extract, Transform, and Load Explained",
        content: `
            <p>In the age of big data, organizations generate massive amounts of information every second—from user interactions, financial transactions, IoT devices, and cybersecurity logs. However, raw data alone holds little value unless it is properly collected, cleaned, and analyzed. This is where the ETL process—Extract, Transform, and Load—plays a crucial role.</p>
            
            <p>ETL is a fundamental process in data engineering and cybersecurity analytics, designed to move data from multiple sources into a centralized system where it can be stored, processed, and visualized for decision-making. Understanding the ETL pipeline is essential not just for data professionals but also for cybersecurity practitioners who rely on accurate, timely data to detect threats and manage incidents effectively.</p>

            <h3>1. What is the ETL Process?</h3>
            <p>The ETL process consists of three main stages:</p>
            <p><strong>Extract</strong> – Gathering data from various sources.</p>
            <p><strong>Transform</strong> – Cleaning, validating, and converting data into a usable format.</p>
            <p><strong>Load</strong> – Storing the transformed data into a target database or data warehouse.</p>
            
            <p>This workflow ensures that data from different systems—such as logs, APIs, spreadsheets, and servers—can be integrated consistently and efficiently.</p>
            
            <p>For instance, in cybersecurity, ETL helps collect logs from multiple endpoints (firewalls, servers, IDS/IPS systems), convert them into a uniform structure, and store them in a central repository for analysis and reporting.</p>

            <h3>2. Stage One: Extract</h3>
            
            <h4>a) Definition</h4>
            <p>The Extract phase involves collecting data from multiple and often heterogeneous sources. These can include:</p>
            <ul>
                <li>Databases (SQL, NoSQL)</li>
                <li>Cloud applications and APIs</li>
                <li>Flat files (CSV, XML, JSON)</li>
                <li>Network and system logs</li>
                <li>Real-time data streams</li>
            </ul>

            <h4>b) Purpose</h4>
            <p>The goal of extraction is to gather data without losing accuracy or completeness. In cybersecurity, for example, extracted data may include login attempts, network packets, user activity logs, and threat intelligence feeds.</p>

            <h4>c) Methods of Extraction</h4>
            <p>There are typically two extraction methods:</p>
            <p><strong>Full Extraction:</strong> The entire dataset is copied each time, suitable for small datasets.</p>
            <p><strong>Incremental Extraction:</strong> Only new or updated records are extracted since the last process, ideal for large and dynamic environments.</p>

            <h4>d) Common Challenges</h4>
            <p><strong>Data inconsistency:</strong> Different systems may store data in varying formats.</p>
            <p><strong>Connectivity issues:</strong> Network errors can interrupt extraction.</p>
            <p><strong>Performance impact:</strong> Excessive data extraction can slow down production systems.</p>
            
            <p>Effective extraction depends on scheduling, monitoring, and using tools that minimize disruptions—such as Apache NiFi, Talend, or AWS Glue.</p>

            <h3>3. Stage Two: Transform</h3>
            
            <h4>a) Definition</h4>
            <p>The Transform phase is the heart of the ETL process. This is where raw data is cleaned, validated, and reshaped to make it consistent, accurate, and useful for analysis.</p>

            <h4>b) Key Transformation Tasks</h4>
            <p><strong>Data Cleaning:</strong> Removing duplicates, fixing errors, and handling missing values.</p>
            <p><strong>Data Standardization:</strong> Converting formats (e.g., date/time zones, numerical precision).</p>
            <p><strong>Data Validation:</strong> Ensuring that data meets required quality and business rules.</p>
            <p><strong>Aggregation:</strong> Summarizing data for reporting (e.g., total login attempts per hour).</p>
            <p><strong>Encryption or Masking:</strong> Protecting sensitive fields like passwords or personal identifiers, which is especially important in cybersecurity contexts.</p>
            <p><strong>Normalization:</strong> Structuring data into relational tables to avoid redundancy.</p>

            <h4>c) Example in Cybersecurity</h4>
            <p>Suppose an organization collects logs from multiple systems: firewall, VPN, and email servers. Each log may have different field names—like "src_ip," "source," or "IP_Address." The transformation process standardizes these fields into a single column name, such as "Source_IP."</p>
            
            <p>It might also convert timestamps into a common format (e.g., UTC) and remove irrelevant data, such as routine background traffic. The result is a clean, uniform dataset ready for analysis.</p>

            <h4>d) Tools for Transformation</h4>
            <p>Some popular transformation tools include Apache Spark, Informatica PowerCenter, and Pentaho Data Integration. Many organizations also use scripting languages like Python for custom data transformations.</p>

            <h3>4. Stage Three: Load</h3>
            
            <h4>a) Definition</h4>
            <p>The Load phase involves moving the transformed data into a target destination—typically a data warehouse, data lake, or centralized database.</p>

            <h4>b) Loading Types</h4>
            <p><strong>Batch Loading:</strong> Data is loaded at scheduled intervals (e.g., hourly, daily).</p>
            <p><strong>Real-Time Loading:</strong> Data is continuously loaded as it arrives, used in time-sensitive applications like threat detection.</p>

            <h4>c) Considerations During Loading</h4>
            <p>When loading data, it's essential to maintain data integrity, avoid duplication, and optimize performance. For large-scale systems, partitioning, indexing, and parallel processing techniques are used to improve efficiency.</p>

            <h4>d) Example</h4>
            <p>A cybersecurity operations center (SOC) might load transformed logs into a Security Information and Event Management (SIEM) system, such as Splunk or IBM QRadar. Once loaded, analysts can run queries, generate dashboards, and trigger alerts for suspicious activities.</p>

            <h3>5. Importance of ETL in Cybersecurity</h3>
            
            <h4>a) Centralized Visibility</h4>
            <p>Cybersecurity teams deal with logs from various sources—servers, endpoints, cloud applications, and firewalls. ETL pipelines bring all this data together, giving a unified view of security events and incidents.</p>

            <h4>b) Faster Threat Detection</h4>
            <p>With automated extraction and transformation, relevant data is always available for analysis. This allows AI-based systems to detect anomalies, brute-force attempts, or data exfiltration patterns more quickly.</p>

            <h4>c) Compliance and Reporting</h4>
            <p>ETL ensures that audit logs and user activity data are collected, stored, and organized in compliance with regulations such as GDPR, HIPAA, or ISO 27001.</p>

            <h4>d) Data Quality and Consistency</h4>
            <p>Accurate, standardized data helps reduce false positives in threat detection systems and ensures reliable reporting.</p>

            <h3>6. Modern ETL vs. ELT</h3>
            <p>A modern variation of ETL is ELT (Extract, Load, Transform), where data is first loaded into the target system and then transformed there. This approach leverages the high processing power of cloud-based data warehouses such as Snowflake or Google BigQuery.</p>
            
            <p>In cybersecurity analytics, ELT is gaining popularity for handling massive data volumes generated by cloud logs and real-time event streams. The choice between ETL and ELT depends on performance needs, data volume, and system architecture.</p>

            <h3>7. Conclusion</h3>
            <p>The ETL process—Extract, Transform, and Load—is a cornerstone of modern data management and cybersecurity analytics. It enables organizations to collect data from diverse sources, clean and standardize it, and make it ready for storage, visualization, and detection.</p>
            
            <p>In cybersecurity, ETL pipelines empower analysts to gain faster insights, respond to incidents, and maintain compliance. As data grows in volume and complexity, automation and AI will continue to enhance ETL workflows, leading to smarter and more adaptive data systems.</p>
            
            <p>Mastering ETL concepts not only helps cybersecurity professionals manage complex datasets but also strengthens their ability to make data-driven decisions that safeguard digital assets.</p>
        `,
        author: "Prisha Sharma | Cybersecurity & Data Analytics Enthusiast | Exploring the Intersection of Data and Security"
    },
    
    darkweb_new: {
        title: "Dark Web Investigations: Tools, Techniques, and Challenges",
        content: `
            <p>In the modern digital era, the internet is an essential part of everyday life. Yet, beneath the surface of the visible web lies a hidden layer known as the Dark Web—a place where anonymity prevails, and both legitimate and illegal activities occur. While the Dark Web supports privacy advocates and whistleblowers, it is also used for cybercrime, illegal trade, and data breaches.</p>
            
            <p>Understanding how cybersecurity professionals investigate the Dark Web is crucial to combating online crime and protecting sensitive data. This article explains the concept of the Dark Web, explores key investigation tools and techniques, and highlights the major challenges that investigators face in this complex environment.</p>

            <h3>1. Understanding the Dark Web</h3>
            <p>The internet can be divided into three layers:</p>
            
            <p><strong>Surface Web:</strong> The visible part of the internet accessible through standard browsers like Chrome or Firefox, and indexed by search engines such as Google or Bing.</p>
            
            <p><strong>Deep Web:</strong> The portion not indexed by search engines, including private databases, intranets, and academic resources.</p>
            
            <p><strong>Dark Web:</strong> A subset of the Deep Web that requires special tools to access, such as the Tor (The Onion Router) network.</p>
            
            <p>Websites on the Dark Web often end with the .onion domain and are not reachable through normal search engines. This environment allows users to communicate and transact anonymously, making it attractive for those seeking privacy—but also for cybercriminals involved in activities such as selling stolen data, distributing malware, or trading illegal goods.</p>

            <h3>2. Why Investigate the Dark Web?</h3>
            <p>Dark Web investigations are essential in modern cybersecurity because many cybercrimes originate or are coordinated through anonymous online spaces. Some key reasons include:</p>
            
            <p><strong>Monitoring Data Breaches:</strong> Leaked credentials, databases, and confidential documents often appear for sale on Dark Web forums or marketplaces.</p>
            
            <p><strong>Tracking Cybercriminal Activities:</strong> Investigators can monitor forums for discussions about ransomware, phishing kits, or hacking tools.</p>
            
            <p><strong>Identifying Threat Actors:</strong> Analysts gather intelligence on individuals or groups involved in organized cybercrime.</p>
            
            <p><strong>Protecting Organizations:</strong> By identifying stolen corporate data early, companies can take defensive actions to prevent further compromise.</p>
            
            <p>Dark Web intelligence supports proactive cybersecurity strategies by providing insights into emerging threats before they impact public systems.</p>

            <h3>3. Tools Used in Dark Web Investigations</h3>
            <p>Investigating the Dark Web requires specialized tools to maintain anonymity, collect evidence, and analyze data safely. Some commonly used tools include:</p>

            <h4>a) Tor Browser</h4>
            <p>The Tor Browser is the primary gateway to the Dark Web. It routes internet traffic through multiple encrypted layers, hiding the user's identity and location. Investigators use Tor to access .onion websites securely and observe illicit activities without revealing their IP addresses.</p>

            <h4>b) VPN and Secure Operating Systems</h4>
            <p>Before accessing Tor, investigators often use Virtual Private Networks (VPNs) and security-focused operating systems such as Tails or Qubes OS. These tools ensure an extra layer of protection and prevent real-world tracking.</p>

            <h4>c) Dark Web Search Engines</h4>
            <p>Although traditional search engines cannot index the Dark Web, there are specialized ones such as Ahmia, Candle, and Torch, which allow limited searching of .onion links.</p>

            <h4>d) OSINT (Open-Source Intelligence) Tools</h4>
            <p>Tools like Maltego, SpiderFoot, and Recon-NG help investigators correlate Dark Web data with publicly available information. For instance, a username or email found on a forum can be linked to social media accounts or past data breaches.</p>

            <h4>e) Dark Web Monitoring Platforms</h4>
            <p>Commercial tools such as DarkOwl Vision, IntSights, and Recorded Future continuously crawl and index Dark Web content. Organizations use these platforms to monitor leaks related to their domains, employee credentials, or products.</p>

            <h4>f) Blockchain Analysis Tools</h4>
            <p>Since many Dark Web transactions use cryptocurrencies like Bitcoin or Monero, tools such as Chainalysis and Elliptic assist in tracing blockchain transactions and identifying potential suspects.</p>
            
            <p>These tools collectively enable cybersecurity professionals to navigate, observe, and analyze hidden activities while minimizing personal risk.</p>

            <h3>4. Techniques for Dark Web Investigations</h3>

            <h4>a) Passive Monitoring</h4>
            <p>In this approach, investigators silently observe suspicious forums, marketplaces, or chatrooms without direct engagement. This technique helps identify new threats, stolen credentials, or upcoming attacks.</p>

            <h4>b) Active Engagement (Undercover Operations)</h4>
            <p>In certain cases, investigators create fake identities to interact with threat actors. This method can help gather intelligence about ransomware groups or marketplaces selling illegal data. However, such operations must follow strict legal and ethical guidelines.</p>

            <h4>c) Data Correlation and Link Analysis</h4>
            <p>Information collected from the Dark Web—such as usernames, IP addresses, or cryptocurrency wallets—is cross-referenced with surface web data. Link analysis tools then identify relationships between individuals, forums, and transactions.</p>

            <h4>d) Automated Crawling and Machine Learning</h4>
            <p>Modern Dark Web investigations use machine learning models to automate data collection and classify content. For example, algorithms can detect keywords related to hacking tools, drugs, or financial fraud.</p>

            <h4>e) Collaboration with Law Enforcement</h4>
            <p>Cybersecurity teams often collaborate with national and international agencies such as the FBI, Europol, or Interpol. Shared intelligence helps dismantle large-scale criminal networks operating across borders.</p>

            <h3>5. Challenges in Dark Web Investigations</h3>
            <p>While technology enables effective monitoring, investigating the Dark Web presents several obstacles:</p>

            <h4>a) Anonymity and Encryption</h4>
            <p>The Tor network's strong encryption makes it nearly impossible to trace users directly. Even if a criminal website is taken down, operators can quickly relocate to new domains.</p>

            <h4>b) Legal and Ethical Concerns</h4>
            <p>Investigators must operate within legal boundaries. Accessing or purchasing illegal material—even for research—can lead to prosecution. Ethical guidelines are essential to maintain credibility and avoid privacy violations.</p>

            <h4>c) Volatile Environment</h4>
            <p>Dark Web content changes rapidly. Marketplaces disappear, new ones emerge, and URLs become inactive frequently. Maintaining up-to-date intelligence requires continuous monitoring.</p>

            <h4>d) Language and Cultural Barriers</h4>
            <p>Dark Web communities often communicate in multiple languages and use coded slang, making it difficult for investigators to interpret discussions accurately.</p>

            <h4>e) Cybersecurity Risks</h4>
            <p>Accessing malicious sites can expose investigators to malware, phishing attempts, or data leaks. Proper isolation, virtual environments, and secure practices are mandatory to minimize these risks.</p>

            <h3>6. The Future of Dark Web Intelligence</h3>
            <p>The use of Artificial Intelligence (AI) and Big Data analytics is transforming Dark Web investigations. AI models can automatically identify illegal listings, detect ransomware negotiations, and predict emerging threats.</p>
            
            <p>Furthermore, global cooperation among law enforcement agencies and private cybersecurity firms is growing stronger. Operations like the takedown of Silk Road and Hydra Market demonstrate that even anonymous networks can be penetrated through coordinated efforts.</p>
            
            <p>As technologies evolve, the balance between privacy and security will remain a key debate. While the Dark Web offers anonymity to activists and journalists, it also challenges cybersecurity experts to prevent its misuse.</p>

            <h3>7. Conclusion</h3>
            <p>Dark Web investigations are a critical aspect of modern cybersecurity. They help detect cyber threats, trace criminal networks, and safeguard individuals and organizations from emerging risks.</p>
            
            <p>By using advanced tools, OSINT techniques, and strict ethical standards, investigators can uncover valuable intelligence from hidden corners of the internet. However, the challenges of anonymity, legality, and volatility demand constant learning and adaptation.</p>
            
            <p>As cybercrime continues to evolve, so must our investigative methods. The future of cybersecurity lies in combining human expertise with intelligent automation to ensure that even the darkest parts of the web do not remain beyond reach.</p>
        `,
        author: "Prisha Sharma | Cybersecurity Researcher | Exploring Threat Intelligence & Digital Forensics"
    },
    
    turing: {
        title: "Applications of Turing Machines in Artificial Intelligence and Problem Solving",
        content: `
            <p>The concept of computation, as we understand it today, owes much to the groundbreaking work of Alan Turing. His abstract model—known as the Turing Machine—laid the foundation for modern computer science, artificial intelligence (AI), and automated problem solving. Although proposed in the 1930s, the principles of Turing Machines continue to shape how we think about algorithms, decision-making, and the limits of what machines can achieve.</p>
            
            <p>This article explores how Turing Machines influence artificial intelligence, their relevance in computational theory, and their applications in solving complex real-world problems.</p>

            <h3>1. What is a Turing Machine?</h3>
            <p>A Turing Machine (TM) is a mathematical model of computation that defines how an abstract machine can manipulate symbols on an infinite tape according to a set of rules. It consists of:</p>
            
            <ul>
                <li>A tape divided into cells that store symbols (representing memory).</li>
                <li>A tape head that reads and writes symbols and moves left or right.</li>
                <li>A finite set of states (including a start and halt state).</li>
                <li>A transition function that dictates what the machine should do next based on its current state and the symbol being read.</li>
            </ul>
            
            <p>Although extremely simple, this model can simulate any computation that can be algorithmically defined. In essence, the Turing Machine is the theoretical foundation of what we call a computer program today.</p>

            <h3>2. The Role of Turing Machines in Artificial Intelligence</h3>
            <p>Artificial Intelligence seeks to create machines capable of reasoning, learning, and problem-solving—activities traditionally associated with human intelligence. The Turing Machine provides the theoretical framework that underpins these capabilities.</p>

            <h4>a) The Computational Model for AI Systems</h4>
            <p>AI algorithms, from search engines to neural networks, operate based on computational rules that process inputs to produce outputs. These rules are, in principle, Turing-computable, meaning they can be represented as instructions that a Turing Machine could execute.</p>
            
            <p>This connection confirms that every AI algorithm—no matter how complex—can be described as a series of logical steps that a computer can perform.</p>

            <h4>b) The Foundation for the "Turing Test"</h4>
            <p>In 1950, Alan Turing proposed the Turing Test as a measure of machine intelligence. The idea was simple: if a machine can engage in a conversation indistinguishable from a human, it can be considered intelligent.</p>
            
            <p>This test, though philosophical, reflects the practical application of Turing's computational theory—demonstrating how symbolic reasoning and rule-based processes could mimic intelligent behavior. Today, AI chatbots and large language models are evaluated through similar principles, showing how deeply Turing's ideas influence AI assessment.</p>

            <h4>c) Algorithmic Thinking and Decision-Making</h4>
            <p>Turing Machines help formalize decision problems, where an algorithm determines whether a given statement or condition is true or false. In AI, such binary reasoning underlies search algorithms, game theory, and logical inference systems—all of which involve systematically exploring states or outcomes to find solutions.</p>

            <h3>3. Applications in Problem Solving</h3>
            <p>Turing Machines are not just theoretical constructs; they form the basis for designing computational solutions to a wide range of problems. Below are several key areas where their concepts are applied.</p>

            <h4>a) Automation of Logical Reasoning</h4>
            <p>AI systems use logic-based models derived from Turing Machine principles to automate reasoning tasks. Examples include theorem proving, knowledge representation, and rule-based expert systems. These systems follow defined transitions—similar to a TM's state changes—to arrive at valid conclusions.</p>
            
            <p>For instance, a medical diagnostic AI might use a rule-based engine that processes symptoms and patient data to infer possible conditions. Each logical step in the reasoning process mirrors how a Turing Machine transitions between states based on input.</p>

            <h4>b) Problem Reduction and Computability</h4>
            <p>Many AI and optimization problems are framed as computable functions, which can be analyzed using the theory of decidability and complexity. The Turing Machine helps determine whether a problem can be solved algorithmically (decidable) or whether it is beyond computation (undecidable).</p>
            
            <p>For example, the Halting Problem, which asks whether a program will eventually stop or run forever, is one of the most famous results from Turing's work. In AI, understanding such limits is crucial for knowing which problems can be solved efficiently and which require approximation or heuristic methods.</p>

            <h4>c) Simulation of Intelligent Agents</h4>
            <p>Modern AI agents—such as self-driving cars or virtual assistants—can be viewed as extended Turing Machines that operate continuously, process inputs from the environment, and adapt based on internal states.</p>
            
            <p>While Turing's original model halts after computation, AI systems extend this idea into interactive computation, where machines continuously process information and make decisions in real time. This concept bridges theoretical computing with practical, intelligent behavior.</p>

            <h4>d) Search and Optimization Algorithms</h4>
            <p>Algorithms such as Depth-First Search (DFS), Breadth-First Search (BFS), and A* Search—used in AI pathfinding and decision-making—are derived from formal computational processes similar to those executed by a Turing Machine.</p>
            
            <p>These algorithms explore state spaces step by step, updating and evaluating conditions to reach optimal solutions—mirroring the state transitions and rule-based actions of a TM.</p>

            <h4>e) Machine Learning Foundations</h4>
            <p>Though machine learning seems far removed from traditional computation theory, it is still grounded in Turing-computable functions. Training a machine learning model involves processing large amounts of data to find patterns—a task that can be modeled as a computation on a Turing-equivalent system.</p>
            
            <p>Furthermore, neural networks—which power today's AI revolution—can, in theory, simulate any function that a Turing Machine can compute, making them Turing complete systems.</p>

            <h3>4. Turing Completeness and Real-World Systems</h3>
            <p>A system is said to be Turing complete if it can perform any computation that a Turing Machine can, given enough time and memory. Most modern programming languages—such as Python, Java, and C—are Turing complete.</p>
            
            <p>This concept guarantees that, in theory, any algorithmic task possible on one computing platform can be implemented on another. This universality is the reason why AI algorithms, from reinforcement learning to deep neural networks, can be implemented across different hardware and software systems.</p>
            
            <p>In cybersecurity, for example, Turing completeness also plays a role. Malware detection systems and automated scanners rely on rule-based computation and pattern recognition—both rooted in Turing's ideas. Understanding the computational limits helps analysts know what can or cannot be automated effectively.</p>

            <h3>5. Limitations and Philosophical Implications</h3>
            <p>While Turing Machines provide the foundation of computation, they also reveal its limitations. Some problems are non-computable, meaning no algorithm can solve them. In AI, this translates to recognizing the boundaries of automation—certain cognitive processes, such as creativity or consciousness, may not be fully captured by algorithmic logic.</p>
            
            <p>However, these limitations have inspired new approaches such as quantum computing and neuromorphic systems, which aim to extend computational boundaries beyond the classical Turing model.</p>

            <h3>6. Conclusion</h3>
            <p>The Turing Machine remains one of the most influential concepts in computer science and artificial intelligence. It not only defines what can be computed but also provides a framework for designing algorithms, solving problems, and understanding machine intelligence.</p>
            
            <p>From logical reasoning and automation to neural networks and optimization, nearly every aspect of AI traces its theoretical roots to Turing's model. As AI continues to evolve, the principles of computation, decidability, and algorithmic reasoning derived from Turing Machines will continue to guide innovation and discovery.</p>
            
            <p>In many ways, modern AI systems are living embodiments of Turing's vision—a testament to how an abstract idea from nearly a century ago continues to shape the intelligent technologies of today.</p>
        `,
        author: "Prisha Sharma | Cybersecurity & AI Enthusiast | Exploring Computational Intelligence and Digital Systems"
    },
    
    software_design: {
        title: "Basics of Software Design in Software Engineering and Project Management",
        content: `
            <p>Software design is one of the most critical phases in software engineering, acting as a bridge between the problem domain and the final implementation. It defines how a system will work, how its components interact, and how user requirements will be met efficiently and reliably. In project management, design serves as the blueprint that guides planning, execution, and quality control.</p>
            
            <p>This article explores the core concepts, principles, models, and challenges of software design, explaining why it is central to both software engineering and project success.</p>

            <h3>1. Understanding Software Design</h3>
            <p>Software design is the process of translating user and system requirements into a structured plan that can be implemented in code. It focuses on defining architecture, data flow, interfaces, and algorithms that together fulfill system objectives.</p>
            
            <p>The design process typically consists of two main levels:</p>
            <p><strong>High-Level Design (HLD):</strong> Defines the system architecture, modules, and their relationships.</p>
            <p><strong>Low-Level Design (LLD):</strong> Focuses on internal logic, algorithms, and data structures within each module.</p>
            
            <p>The purpose of design is to ensure that the system is modular, scalable, efficient, and maintainable, enabling developers to build robust solutions while minimizing risks during implementation.</p>

            <h3>2. Objectives of Software Design</h3>
            <p>The main objectives of software design can be summarized as follows:</p>
            
            <p><strong>Clarity:</strong> Ensures that every component of the system has a clear, well-defined purpose.</p>
            <p><strong>Modularity:</strong> Breaks the system into smaller, manageable parts to simplify development and maintenance.</p>
            <p><strong>Reusability:</strong> Promotes the use of existing components to reduce redundancy.</p>
            <p><strong>Efficiency:</strong> Optimizes performance and resource utilization.</p>
            <p><strong>Maintainability:</strong> Simplifies debugging, testing, and future updates.</p>
            <p><strong>Scalability:</strong> Allows the system to adapt as requirements evolve.</p>
            
            <p>Effective software design is both a technical and strategic activity—it ensures that the final product meets user needs, project timelines, and organizational goals.</p>

            <h3>3. Principles of Good Software Design</h3>
            <p>Well-designed software follows a set of fundamental principles that make it easier to develop and sustain over time:</p>

            <h4>a) Modularity</h4>
            <p>Breaking the system into modules allows each unit to be developed, tested, and maintained independently. This makes collaboration easier and reduces the impact of changes.</p>

            <h4>b) Abstraction</h4>
            <p>Abstraction hides unnecessary details and focuses on the essential features. It enables designers to manage system complexity by simplifying how components are represented.</p>

            <h4>c) Encapsulation</h4>
            <p>Encapsulation binds data and behavior together, ensuring that internal details are hidden from other parts of the system. This improves security and reduces unintended dependencies.</p>

            <h4>d) Cohesion and Coupling</h4>
            <p>Modules should be highly cohesive (focused on one task) and loosely coupled (minimally dependent on others). This combination increases flexibility and reusability.</p>

            <h4>e) Separation of Concerns</h4>
            <p>Different functionalities—such as data handling, business logic, and user interface—should be designed independently to avoid overlap and confusion.</p>

            <h4>f) Design for Change</h4>
            <p>Since software evolves, designs should anticipate changes with minimal impact on existing modules. This makes systems more adaptive to new requirements.</p>
            
            <p>These principles are universal and apply across methodologies—whether traditional waterfall or modern agile frameworks.</p>

            <h3>4. The Role of Design in Project Management</h3>
            <p>In project management, software design serves as a roadmap for the entire development cycle. It transforms requirements into actionable tasks and defines the scope, resources, and risks.</p>

            <h4>a) Planning and Estimation</h4>
            <p>A detailed design helps project managers estimate time, cost, and manpower accurately. Clear design specifications reduce ambiguity in later stages.</p>

            <h4>b) Risk Management</h4>
            <p>Design reviews can identify potential risks—such as scalability issues, integration challenges, or security flaws—before coding begins.</p>

            <h4>c) Communication and Coordination</h4>
            <p>Design documentation ensures that developers, testers, and stakeholders share a unified understanding of the system, reducing miscommunication.</p>

            <h4>d) Quality Assurance</h4>
            <p>Testing strategies and acceptance criteria are derived from the design documents, ensuring that the system performs as intended.</p>
            
            <p>Thus, software design plays a direct role in achieving project objectives on time and within budget.</p>

            <h3>5. Common Design Models and Techniques</h3>
            <p>Several modeling techniques are used in software design to visualize and analyze system structure and behavior.</p>

            <h4>a) Unified Modeling Language (UML)</h4>
            <p>UML provides standardized diagrams—such as use case, class, and sequence diagrams—to describe system components and interactions.</p>

            <h4>b) Data Flow Diagrams (DFD)</h4>
            <p>DFDs depict how data moves through a system, illustrating inputs, processes, and outputs. They help in understanding functional dependencies.</p>

            <h4>c) Entity-Relationship (ER) Diagrams</h4>
            <p>ER diagrams represent the data model, showing how entities (tables) relate to each other in databases.</p>

            <h4>d) Flowcharts and Pseudocode</h4>
            <p>These tools describe algorithms and logical processes, useful in low-level design for detailed implementation planning.</p>
            
            <p>By combining these models, designers can create both abstract and detailed representations of the system for different stakeholders.</p>

            <h3>6. Design Patterns and Reusability</h3>
            <p>Design patterns are tried-and-tested solutions to common design problems. Examples include:</p>
            
            <p><strong>Singleton Pattern</strong> – ensures only one instance of a class exists.</p>
            <p><strong>Observer Pattern</strong> – allows components to respond dynamically to changes.</p>
            <p><strong>Factory Pattern</strong> – manages object creation without specifying exact classes.</p>
            
            <p>Using design patterns reduces development effort, promotes code reuse, and enforces consistency across the project.</p>

            <h3>7. Documentation and Design Reviews</h3>
            <p>Documentation is an essential output of the design process. It includes architectural diagrams, module descriptions, interface specifications, and data structures. Proper documentation:</p>
            
            <ul>
                <li>Assists new developers in understanding the system.</li>
                <li>Supports testing, maintenance, and auditing.</li>
                <li>Ensures traceability between requirements and implementation.</li>
            </ul>
            
            <p>Design reviews, on the other hand, are formal evaluations where teams analyze the design for completeness, consistency, and feasibility. They help identify issues early—saving time and cost later in development.</p>

            <h3>8. Challenges in Software Design</h3>
            <p>Despite its importance, design often faces practical challenges:</p>
            
            <ul>
                <li>Rapidly changing client requirements.</li>
                <li>Time pressure leading to incomplete designs.</li>
                <li>Lack of clear communication among teams.</li>
                <li>Overengineering or unnecessary complexity.</li>
            </ul>
            
            <p>To overcome these challenges, teams should emphasize iterative design, continuous feedback, and effective collaboration between designers and developers.</p>

            <h3>9. Conclusion</h3>
            <p>Software design forms the backbone of software engineering and project management. It transforms abstract ideas into structured systems that are reliable, efficient, and adaptable. A good design not only makes development smoother but also ensures that the product remains sustainable and scalable long after deployment.</p>
            
            <p>By following sound design principles, leveraging modeling techniques, and integrating with strong project management practices, organizations can deliver software that meets both technical excellence and business value.</p>
        `,
        author: "Prisha Sharma | Software Engineering & Cybersecurity Enthusiast | Exploring System Design and Project Innovation"
    }
};
/* ---------------------------------------------------------- */

function toggleArticle(articleId) {
    const article = articleContent[articleId];
    if (!article) return;
    const modal = document.createElement('div');
    modal.className = 'article-modal';
    modal.innerHTML = `
        <div class="article-modal-content">
            <button class="article-close" onclick="this.parentElement.parentElement.remove()">
                <i class="fas fa-times"></i>
            </button>
            <h2>${article.title}</h2>
            <div class="article-body">${article.content}</div>
            <p class="article-author">Author: ${article.author}</p>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

console.log('%c🔒 Welcome to Prisha\'s Cybersecurity Portfolio!', 'color: #08CB00; font-size: 20px; font-weight: bold;');
console.log('%cInterested in cybersecurity? Let\'s connect!', 'color: #9929EA; font-size: 14px;');

document.addEventListener("DOMContentLoaded", () => {
    rotateQuotes();
    setYear();
});
