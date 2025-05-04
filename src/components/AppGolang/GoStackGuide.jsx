import React, { useState } from 'react';
import { BookOpen, Code, Server, Database, Cloud, Globe, Cpu, Zap, Navigation, GitBranch, Clock, Shield } from 'lucide-react';
import styles from './GoStackGuide.module.css';

const GoStackGuide = () => {
  const [activeTab, setActiveTab] = useState('fundamentos');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <h1 className={styles.headerTitle}>Stack Completo de Aplicaciones Escalables y Distribuidas con Go</h1>
          <div className={styles.headerIconContainer}>
            <Code size={24} className={styles.headerIcon} />
          </div>
        </div>
        <p className={styles.headerDescription}>Guía completa para backenders que quieran dominar Go y sistemas distribuidos :)</p>
      </header>

      <nav className={styles.nav}>
        <div className={styles.tabList}>
          <TabButton 
            label="Fundamentos de Go" 
            icon={<BookOpen size={18} />} 
            active={activeTab === 'fundamentos'} 
            onClick={() => handleTabChange('fundamentos')} 
          />
          <TabButton 
            label="Concurrencia" 
            icon={<Zap size={18} />} 
            active={activeTab === 'concurrencia'} 
            onClick={() => handleTabChange('concurrencia')} 
          />
          <TabButton 
            label="Runtime & Compilación" 
            icon={<Cpu size={18} />} 
            active={activeTab === 'runtime'} 
            onClick={() => handleTabChange('runtime')} 
          />
          <TabButton 
            label="Microservicios" 
            icon={<Server size={18} />} 
            active={activeTab === 'microservicios'} 
            onClick={() => handleTabChange('microservicios')} 
          />
          <TabButton 
            label="Kubernetes" 
            icon={<Cloud size={18} />} 
            active={activeTab === 'kubernetes'} 
            onClick={() => handleTabChange('kubernetes')} 
          />
          <TabButton 
            label="Sistemas Distribuidos" 
            icon={<Globe size={18} />} 
            active={activeTab === 'distribuidos'} 
            onClick={() => handleTabChange('distribuidos')} 
          />
          <TabButton 
            label="DDD & Hexagonal" 
            icon={<GitBranch size={18} />} 
            active={activeTab === 'arquitectura'} 
            onClick={() => handleTabChange('arquitectura')} 
          />
          <TabButton 
            label="Recursos" 
            icon={<Database size={18} />} 
            active={activeTab === 'recursos'} 
            onClick={() => handleTabChange('recursos')} 
          />
        </div>
      </nav>

      <main className={styles.mainContent}>
        {activeTab === 'fundamentos' && <FundamentosContent />}
        {activeTab === 'concurrencia' && <ConcurrenciaContent />}
        {activeTab === 'runtime' && <RuntimeContent />}
        {activeTab === 'microservicios' && <MicroserviciosContent />}
        {activeTab === 'kubernetes' && <KubernetesContent />}
        {activeTab === 'distribuidos' && <DistribuidosContent />}
        {activeTab === 'arquitectura' && <ArquitecturaContent />}
        {activeTab === 'recursos' && <RecursosContent />}
      </main>

      <footer className={styles.footer}>
        <p>Diseñado para ayudarte a dominar el stack completo de desarrollo con Go en sitemas distribuidos</p>
      </footer>
    </div>
  );
};

const TabButton = ({ label, icon, active, onClick }) => (
  <button
    className={`${styles.tabButton} ${active ? styles.tabButtonActive : styles.tabButtonInactive}`}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const SectionTitle = ({ title, icon }) => (
  <div className={styles.sectionTitleContainer}>
    <div className={styles.sectionIconContainer}>
      {icon}
    </div>
    <h2 className={styles.sectionTitle}>{title}</h2>
  </div>
);

const TopicCard = ({ title, description, level }) => {
  const levelStyleMap = {
    básico: styles.topicCardLevelBasic,
    intermedio: styles.topicCardLevelIntermediate,
    avanzado: styles.topicCardLevelAdvanced,
  };

  return (
    <div className={styles.topicCard}>
      <div className={styles.topicCardHeader}>
        <h3 className={styles.topicCardTitle}>{title}</h3>
        <span className={`${styles.topicCardLevel} ${levelStyleMap[level]}`}>
          {level}
        </span>
      </div>
      <p className={styles.topicCardDescription}>{description}</p>
    </div>
  );
};

const ResourceCard = ({ title, type, link, description }) => {
  const typeIcons = {
    libro: <BookOpen size={16} />,
    tutorial: <Code size={16} />,
    documentación: <BookOpen size={16} />,
    artículo: <BookOpen size={16} />,
    video: <BookOpen size={16} />,
    herramienta: <Cpu size={16} />,
  };

  const typeStyleMap = {
    libro: styles.resourceCardTypeBook,
    tutorial: styles.resourceCardTypeTutorial,
    documentación: styles.resourceCardTypeDocumentation,
    artículo: styles.resourceCardTypeArticle,
    video: styles.resourceCardTypeVideo,
    herramienta: styles.resourceCardTypeTool,
  };

  return (
    <div className={styles.resourceCard}>
      <div className={styles.resourceCardHeader}>
        <h3 className={styles.resourceCardTitle}>{title}</h3>
        <span className={`${styles.resourceCardType} ${typeStyleMap[type]}`}>
          {typeIcons[type]} {type}
        </span>
      </div>
      <p className={styles.resourceCardDescription}>{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.resourceCardLink}
      >
        Ver recurso <Navigation size={14} />
      </a>
    </div>
  );
};

// Contenido de las pestañas
const FundamentosContent = () => (
  <div>
    <SectionTitle title="Fundamentos de Go" icon={<BookOpen size={20} className={styles.sectionIcon} />} />
    
    <p className={styles.headerDescription}>Go (o Golang) es un lenguaje de programación desarrollado por Google, diseñado para ser simple, eficiente y potente. Aquí encontrarás los conceptos fundamentales que necesitas dominar.</p>
    
    <div className={styles.topicGrid}>
      <TopicCard 
        title="Sintaxis y tipos de datos" 
        description="Aprende la sintaxis básica de Go, tipos de datos primitivos, estructuras, interfaces y cómo trabajar con ellos." 
        level="básico" 
      />
      <TopicCard 
        title="Control de flujo" 
        description="Domina las estructuras de control, bucles, condicionales y manejo de errores en Go." 
        level="básico" 
      />
      <TopicCard 
        title="Funciones y métodos" 
        description="Comprende cómo funcionan las funciones, closures, punteros receptores y métodos en Go." 
        level="básico" 
      />
      <TopicCard 
        title="Paquetes y módulos" 
        description="Aprende a organizar tu código en paquetes reutilizables y gestionar dependencias con Go modules." 
        level="intermedio" 
      />
      <TopicCard 
        title="Testing en Go" 
        description="Cómo escribir pruebas unitarias, benchmarks y ejemplos utilizando el paquete testing." 
        level="intermedio" 
      />
      <TopicCard 
        title="Patrones de diseño" 
        description="Implementación de patrones comunes como Factory, Singleton, Adapter, etc., en Go." 
        level="avanzado" 
      />
    </div>

    <div className={`${styles.infoBox} ${styles.infoBoxBlue}`}>
      <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleBlue}`}>¿Por qué Go?</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Simplicidad:</span> Sintaxis clara y concisa que facilita el mantenimiento y la legibilidad.</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Compilación:</span> Genera binarios nativos sin dependencias externas para múltiples plataformas.</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Rendimiento:</span> Ofrece rendimiento cercano a C/C++ con la facilidad de un lenguaje moderno.</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Concurrencia:</span> Soporte nativo para programación concurrente con goroutines y channels.</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Biblioteca estándar:</span> Amplia y potente, reduce la necesidad de dependencias externas.</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Ecosistema cloud:</span> Muchas herramientas cloud están escritas en Go (Docker, Kubernetes, etc.).</li>
      </ul>
    </div>
  </div>
);

const ConcurrenciaContent = () => (
  <div>
    <SectionTitle title="Concurrencia en Go" icon={<Zap size={20} className={styles.sectionIcon} />} />
    
    <p className={styles.headerDescription}>La concurrencia es una de las características más potentes de Go. El modelo de concurrencia de Go basado en goroutines y channels permite crear programas eficientes que aprovechan los sistemas multinúcleo modernos.</p>
    
    <div className={styles.topicGrid}>
      <TopicCard 
        title="Goroutines" 
        description="Aprende sobre las goroutines - hilos ligeros manejados por el runtime de Go que permiten ejecutar funciones de forma concurrente." 
        level="básico" 
      />
      <TopicCard 
        title="Channels" 
        description="Domina los canales, el principal mecanismo para comunicar y sincronizar goroutines en Go." 
        level="intermedio" 
      />
      <TopicCard 
        title="Select" 
        description="La instrucción select permite esperar en múltiples operaciones de comunicación, esencial para patrones avanzados de concurrencia." 
        level="intermedio" 
      />
      <TopicCard 
        title="Patrones de concurrencia" 
        description="Aprende patrones como fan-out/fan-in, workers pools, pipelines y más para resolver problemas concurrentes." 
        level="avanzado" 
      />
      <TopicCard 
        title="Sincronización" 
        description="Técnicas de sincronización usando el paquete sync, mutexes, WaitGroups y otros primitivos." 
        level="intermedio" 
      />
      <TopicCard 
        title="Context" 
        description="El paquete context para la cancelación y propagación de deadlines entre goroutines." 
        level="avanzado" 
      />
    </div>

    <div className={`${styles.infoBox} ${styles.infoBoxBlue}`}>
      <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleBlue}`}>Diferencias entre Concurrencia y Paralelismo</h3>
      <div className={styles.twoColGrid}>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Concurrencia</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>Lidiar con múltiples tareas al mismo tiempo</li>
            <li className={styles.listItem}>No implica ejecución simultánea</li>
            <li className={styles.listItem}>Estructura de un programa</li>
            <li className={styles.listItem}>Gestión de múltiples tareas</li>
          </ul>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Paralelismo</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>Ejecutar múltiples tareas simultáneamente</li>
            <li className={styles.listItem}>Requiere múltiples procesadores/núcleos</li>
            <li className={styles.listItem}>Ejecución de un programa</li>
            <li className={styles.listItem}>Aprovechamiento de múltiples CPU</li>
          </ul>
        </div>
      </div>
    </div>

    <div className={`${styles.infoBox} ${styles.infoBoxYellow}`}>
      <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleYellow}`}>Consejo práctico</h3>
      <p className={styles.listItem}>
        "No comuniques compartiendo memoria; comparte memoria comunicando" - Es uno de los principios fundamentales de concurrencia en Go. En lugar de usar variables compartidas protegidas por locks, usa channels para pasar datos entre goroutines.
      </p>
    </div>
  </div>
);

const RuntimeContent = () => (
  <div>
    <SectionTitle title="Runtime y Compilación de Go" icon={<Cpu size={20} className={styles.sectionIcon} />} />
    
    <p className={styles.headerDescription}>Uno de los aspectos distintivos de Go es su proceso de compilación y su runtime. Entender cómo funciona internamente te ayudará a optimizar tus aplicaciones y comprender mejor el comportamiento del lenguaje.</p>
    
    <div className={styles.topicGrid}>
      <TopicCard 
        title="Compilación a binarios nativos" 
        description="Cómo Go compila directamente a código máquina nativo para cada arquitectura sin necesidad de una VM." 
        level="intermedio" 
      />
      <TopicCard 
        title="Scheduler de goroutines" 
        description="Cómo el runtime de Go gestiona miles de goroutines en un número limitado de OS threads." 
        level="avanzado" 
      />
      <TopicCard 
        title="Garbage Collector" 
        description="Funcionamiento del recolector de basura de Go, cómo optimizarlo y reducir su impacto." 
        level="avanzado" 
      />
      <TopicCard 
        title="Compilación cruzada" 
        description="Cómo compilar aplicaciones Go para diferentes sistemas operativos y arquitecturas." 
        level="intermedio" 
      />
      <TopicCard 
        title="Etiquetas de compilación" 
        description="Cómo usar build tags para controlar qué código se incluye en una compilación específica." 
        level="intermedio" 
      />
      <TopicCard 
        title="CGO y FFI" 
        description="Interfaz de función externa para integrar código nativo (C/C++) con Go." 
        level="avanzado" 
      />
    </div>

    <div className={styles.twoColGrid}>
      <div className={`${styles.infoBox} ${styles.infoBoxBlue}`}>
        <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleBlue}`}>Ventajas de la compilación en Go</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Binarios autónomos sin dependencias externas</li>
          <li className={styles.listItem}>Rendimiento nativo cercano a C/C++</li>
          <li className={styles.listItem}>No requiere intérpretes o máquinas virtuales</li>
          <li className={styles.listItem}>Verificación de tipos en tiempo de compilación</li>
          <li className={styles.listItem}>Tiempos de compilación rápidos</li>
          <li className={styles.listItem}>Fácil despliegue en contenedores</li>
        </ul>
      </div>
      <div className={`${styles.infoBox} ${styles.infoBoxGreen}`}>
        <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleGreen}`}>Diferencias con PHP</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>PHP: Interpretado, Go: Compilado</li>
          <li className={styles.listItem}>PHP: Tipado dinámico, Go: Tipado estático</li>
          <li className={styles.listItem}>PHP: Requiere intérprete para ejecutarse, Go: Binarios autónomos</li>
          <li className={styles.listItem}>PHP: Orientado a scripting web, Go: Propósito general</li>
          <li className={styles.listItem}>PHP: Mayor overhead de memoria, Go: Muy eficiente en memoria</li>
          <li className={styles.listItem}>PHP: Concurrencia limitada, Go: Excelente soporte para concurrencia</li>
        </ul>
      </div>
    </div>

    <div className={`${styles.infoBox} ${styles.infoBoxGray}`}>
      <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleGray}`}>Proceso de compilación de Go</h3>
      <ol className={styles.orderedList}>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Análisis léxico:</span> Convierte el código fuente en tokens</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Análisis sintáctico:</span> Construye el árbol de sintaxis abstracta (AST)</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Comprobación de tipos:</span> Verifica la consistencia de tipos</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Optimizaciones:</span> Análisis de escape, inlining, eliminación de código muerto</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Generación de código:</span> Traducción a código máquina nativo</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Enlazado (linking):</span> Resolución de referencias y creación del binario final</li>
      </ol>
    </div>
  </div>
);

const MicroserviciosContent = () => (
  <div>
    <SectionTitle title="Microservicios con Go" icon={<Server size={20} className={styles.sectionIcon} />} />
    
    <p className={styles.headerDescription}>Go es un lenguaje ideal para implementar arquitecturas de microservicios gracias a su eficiencia, rendimiento y soporte para concurrencia. Aprende a construir sistemas robustos y escalables basados en microservicios.</p>
    
    <div className={styles.topicGrid}>
      <TopicCard 
        title="Arquitectura de microservicios" 
        description="Principios, ventajas y desafíos de las arquitecturas basadas en microservicios." 
        level="intermedio" 
      />
      <TopicCard 
        title="APIs RESTful" 
        description="Diseño e implementación de APIs REST en Go usando paquetes como net/http, gorilla/mux, gin, etc." 
        level="básico" 
      />
      <TopicCard 
        title="gRPC" 
        description="Comunicación entre servicios usando el framework gRPC y Protocol Buffers." 
        level="intermedio" 
      />
      <TopicCard 
        title="Mensajería y colas" 
        description="Implementación de patrones de mensajería asíncrona con NATS, RabbitMQ, Kafka, etc." 
        level="avanzado" 
      />
      <TopicCard 
        title="Service Discovery" 
        description="Mecanismos para registrar, descubrir y conectar microservicios dinámicamente." 
        level="avanzado" 
      />
      <TopicCard 
        title="Resiliencia y Circuit Breakers" 
        description="Patrones para construir microservicios resilientes que manejen fallos graciosamente." 
        level="avanzado" 
      />
    </div>

    <div className={`${styles.infoBox} ${styles.infoBoxBlue}`}>
      <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleBlue}`}>¿Por qué Go para microservicios?</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Eficiencia:</span> Bajo consumo de recursos y inicio rápido, ideal para contenedores</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Concurrencia:</span> Manejo nativo de múltiples conexiones simultáneas</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Binarios pequeños:</span> Despliegues rápidos y contenedores ligeros</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Biblioteca estándar:</span> Soporte nativo para HTTP, JSON, etc.</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Ecosistema:</span> Múltiples frameworks y herramientas para microservicios</li>
        <li className={styles.listItem}><span className={styles.listItemLabel}>Compilación estática:</span> Fácil distribución y despliegue sin dependencias</li>
      </ul>
    </div>

    <div className={`${styles.infoBox} ${styles.infoBoxPurple}`}>
      <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitlePurple}`}>Frameworks populares para microservicios en Go</h3>
      <div className={styles.topicGrid}>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Go Kit</h4>
          <p className={styles.topicCardDescription}>Toolkit para construir microservicios robustos y de nivel empresarial</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Gin</h4>
          <p className={styles.topicCardDescription}>Framework web ligero con excelente rendimiento para APIs</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Echo</h4>
          <p className={styles.topicCardDescription}>Framework minimalista de alto rendimiento</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Micro</h4>
          <p className={styles.topicCardDescription}>Plataforma para desarrollo de microservicios</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Fiber</h4>
          <p className={styles.topicCardDescription}>Framework web inspirado en Express.js con alto rendimiento</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>gRPC-Go</h4>
          <p className={styles.topicCardDescription}>Implementación de gRPC para comunicación entre servicios</p>
        </div>
      </div>
    </div>
  </div>
);

const KubernetesContent = () => (
  <div>
    <SectionTitle title="Kubernetes y Orquestación" icon={<Cloud size={20} className={styles.sectionIcon} />} />
    
    <p className={styles.headerDescription}>Kubernetes (K8s) es la plataforma líder para orquestar contenedores, permitiendo automatizar el despliegue, escalado y gestión de aplicaciones. Aprende cómo utilizarlo para desplegar tus microservicios en Go.</p>
    
    <div className={styles.topicGrid}>
      <TopicCard 
        title="Conceptos básicos de Kubernetes" 
        description="Pods, ReplicaSets, Deployments, Services y demás objetos fundamentales de Kubernetes." 
        level="básico" 
      />
      <TopicCard 
        title="Contenedores y Docker" 
        description="Fundamentos de contenedores, imágenes Docker y cómo contenerizar aplicaciones Go." 
        level="básico" 
      />
      <TopicCard 
        title="Helm Charts" 
        description="Gestión de paquetes para Kubernetes y cómo empaquetar aplicaciones Go." 
        level="intermedio" 
      />
      <TopicCard 
        title="Service Mesh" 
        description="Implementación de Istio, Linkerd u otras soluciones de service mesh para microservicios." 
        level="avanzado" 
      />
      <TopicCard 
        title="Operadores de Kubernetes" 
        description="Desarrollo de operadores en Go para extender la funcionalidad de Kubernetes." 
        level="avanzado" 
      />
      <TopicCard 
        title="CI/CD para microservicios" 
        description="Pipelines de integración y despliegue continuo para aplicaciones Go en Kubernetes." 
        level="intermedio" 
      />
    </div>

    <div className={styles.twoColGrid}>
      <div className={`${styles.infoBox} ${styles.infoBoxBlue}`}>
        <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleBlue}`}>¿Por qué Kubernetes?</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Autoescalado de aplicaciones basado en uso de recursos</li>
          <li className={styles.listItem}>Alta disponibilidad mediante réplicas y autorecuperación</li>
          <li className={styles.listItem}>Distribución de tráfico y balanceo de carga</li>
          <li className={styles.listItem}>Despliegues y rollbacks automatizados</li>
          <li className={styles.listItem}>Gestión de secretos y configuraciones</li>
          <li className={styles.listItem}>Abstracción sobre múltiples proveedores cloud</li>
        </ul>
      </div>
      <div className={`${styles.infoBox} ${styles.infoBoxGreen}`}>
        <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleGreen}`}>Go y Kubernetes</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>Kubernetes está escrito en Go</li>
          <li className={styles.listItem}>Cliente oficial (client-go) para integración con Kubernetes</li>
          <li className={styles.listItem}>Excelente soporte para crear operadores y extensiones</li>
          <li className={styles.listItem}>Aplicaciones Go generan binarios pequeños, ideales para contenedores</li>
          <li className={styles.listItem}>Menor consumo de recursos en entornos Kubernetes</li>
          <li className={styles.listItem}>Arranque rápido para escalado eficiente</li>
        </ul>
      </div>
    </div>

    <div className={`${styles.infoBox} ${styles.infoBoxYellow}`}>
      <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleYellow}`}>Arquitectura típica de microservicios en Kubernetes</h3>
      <div className={styles.topicGrid}>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Ingress</h4>
          <p className={styles.topicCardDescription}>Gestión de tráfico externo</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>API Gateway</h4>
          <p className={styles.topicCardDescription}>Ruteo y autenticación</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Microservicios</h4>
          <p className={styles.topicCardDescription}>Lógica de negocio</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Bases de datos</h4>
          <p className={styles.topicCardDescription}>Persistencia</p>
        </div>
        
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Service Discovery</h4>
          <p className={styles.topicCardDescription}>Localización de servicios</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Config Maps</h4>
          <p className={styles.topicCardDescription}>Configuración dinámica</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Secrets</h4>
          <p className={styles.topicCardDescription}>Datos sensibles</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Monitoring</h4>
          <p className={styles.topicCardDescription}>Observabilidad</p>
        </div>
      </div>
    </div>
  </div>
);

const DistribuidosContent = () => (
  <div>
    <SectionTitle title="Sistemas Distribuidos" icon={<Globe size={20} className={styles.sectionIcon} />} />
    
    <p className={styles.headerDescription}>Go es una excelente elección para construir sistemas distribuidos gracias a su eficiencia, concurrencia y rendimiento. Aprende los fundamentos y patrones para construir sistemas distribuidos robustos y escalables.</p>
    
    <div className={styles.topicGrid}>
      <TopicCard 
        title="Fundamentos de sistemas distribuidos" 
        description="Principios básicos, desafíos y características de los sistemas distribuidos." 
        level="intermedio" 
      />
      <TopicCard 
        title="Consistencia y consenso" 
        description="Algoritmos de consenso distribuido como Raft, Paxos y soluciones en Go." 
        level="avanzado" 
      />
      <TopicCard 
        title="Comunicación entre servicios" 
        description="Patrones de comunicación síncrona y asíncrona entre componentes distribuidos." 
        level="intermedio" 
      />
      <TopicCard 
        title="Tolerancia a fallos" 
        description="Diseño de sistemas distribuidos resilientes que sobreviven a fallos parciales." 
        level="avanzado" 
      />
      <TopicCard 
        title="Escalabilidad horizontal" 
        description="Técnicas para escalar sistemas distribuidos añadiendo más nodos." 
        level="intermedio" 
      />
      <TopicCard 
        title="Bases de datos distribuidas" 
        description="Integración con bases de datos distribuidas NoSQL, NewSQL y sistemas de almacenamiento." 
        level="avanzado" 
      />
    </div>

    <div className={styles.twoColGrid}>
      <div className={`${styles.infoBox} ${styles.infoBoxBlue}`}>
        <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleBlue}`}>Desafíos de los sistemas distribuidos</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Latencia:</span> Retardos en la comunicación entre nodos</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Fallos parciales:</span> Componentes individuales pueden fallar mientras otros siguen funcionando</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Consistencia de datos:</span> Mantener datos coherentes entre diferentes nodos</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Particiones de red:</span> Segmentos de la red pueden quedar aislados temporalmente</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Concurrencia:</span> Múltiples operaciones ocurriendo simultáneamente</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Escalabilidad:</span> Mantener rendimiento al crecer el sistema</li>
        </ul>
      </div>
      <div className={`${styles.infoBox} ${styles.infoBoxGreen}`}>
        <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleGreen}`}>¿Por qué Go para sistemas distribuidos?</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Concurrencia nativa:</span> Goroutines y channels facilitan operaciones concurrentes</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Networking potente:</span> Excelente biblioteca estándar para comunicaciones en red</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Eficiencia:</span> Bajo consumo de recursos para entornos cloud</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Tiempos de inicio rápidos:</span> Ideal para escalado dinámico</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Simplicidad:</span> Código mantenible para sistemas complejos</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Ecosistema:</span> Muchas herramientas y bibliotecas para sistemas distribuidos</li>
        </ul>
      </div>
    </div>

    <div className={`${styles.infoBox} ${styles.infoBoxPurple}`}>
      <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitlePurple}`}>Teorema CAP y diseño de sistemas distribuidos</h3>
      <p className={styles.listItem}>
        El teorema CAP establece que un sistema distribuido no puede proporcionar simultáneamente más de dos de estas garantías:
      </p>
      <div className={styles.topicGrid}>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Consistencia (C)</h4>
          <p className={styles.topicCardDescription}>Todos los nodos ven los mismos datos al mismo tiempo</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Disponibilidad (A)</h4>
          <p className={styles.topicCardDescription}>Cada petición recibe una respuesta (sin garantía de que contenga los datos más recientes)</p>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Tolerancia a particiones (P)</h4>
          <p className={styles.topicCardDescription}>El sistema sigue funcionando aunque haya fallos en la comunicación entre nodos</p>
        </div>
      </div>
    </div>
  </div>
);

const ArquitecturaContent = () => (
  <div>
    <SectionTitle title="DDD y Arquitectura Hexagonal en Go" icon={<GitBranch size={20} className={styles.sectionIcon} />} />
    
    <p className={styles.headerDescription}>La Arquitectura Hexagonal y el Domain-Driven Design (DDD) son enfoques poderosos para organizar aplicaciones complejas. Go es un excelente lenguaje para implementar estos patrones gracias a su sistema de interfaces y su claridad sintáctica.</p>
    
    <div className={styles.topicGrid}>
      <TopicCard 
        title="Principios de DDD" 
        description="Ubiquitous Language, Bounded Contexts, Aggregates, Entities, Value Objects y Domain Events en Go." 
        level="intermedio" 
      />
      <TopicCard 
        title="Arquitectura Hexagonal" 
        description="Implementación de puertos y adaptadores para separar la lógica de negocio de las dependencias externas." 
        level="intermedio" 
      />
      <TopicCard 
        title="CQRS" 
        description="Separación de modelos de lectura y escritura para optimizar rendimiento y escalabilidad." 
        level="avanzado" 
      />
      <TopicCard 
        title="Event Sourcing" 
        description="Almacenamiento y reconstrucción de estado a partir de secuencias de eventos inmutables." 
        level="avanzado" 
      />
      <TopicCard 
        title="Testing en Arquitectura Hexagonal" 
        description="Estrategias y técnicas para probar aplicaciones con Arquitectura Hexagonal y DDD." 
        level="intermedio" 
      />
      <TopicCard 
        title="Refactorización hacia DDD" 
        description="Cómo migrar aplicaciones monolíticas existentes hacia una arquitectura basada en DDD." 
        level="avanzado" 
      />
    </div>

    <div className={`${styles.infoBox} ${styles.infoBoxBlue}`}>
      <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleBlue}`}>Estructura de Proyecto en Arquitectura Hexagonal</h3>
      <div className={styles.codeBlock}>
        <pre>
{`/cmd
  /api         # Punto de entrada - API HTTP
  /worker      # Punto de entrada - Procesamiento en segundo plano
/internal
  /domain      # Modelos y lógica de dominio
    /model     # Entidades, value objects, DTOs
    /service   # Servicios de dominio
    /event     # Eventos de dominio
  /application # Casos de uso / servicios de aplicación
  /port        # Definición de puertos (interfaces)
    /input     # Puertos primarios (entrada)
    /output    # Puertos secundarios (salida)
  /adapter     # Implementaciones de adaptadores
    /primary   # Adaptadores primarios (HTTP, gRPC, CLI)
    /secondary # Adaptadores secundarios (DB, message queue, external APIs)
/pkg           # Código reutilizable entre proyectos
/config        # Configuración
/scripts       # Scripts de despliegue, migración, etc.`}
        </pre>
      </div>
    </div>

    <div className={styles.twoColGrid}>
      <div className={`${styles.infoBox} ${styles.infoBoxGreen}`}>
        <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleGreen}`}>Beneficios de Arquitectura Hexagonal en Go</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Separación de preocupaciones:</span> Aislamiento claro de la lógica de dominio</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Testabilidad:</span> Facilidad para realizar pruebas unitarias y de integración</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Flexibilidad:</span> Cambiar adaptadores sin modificar el núcleo de la aplicación</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Mantenibilidad:</span> Código más organizado y con menor acoplamiento</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Evolución:</span> Facilita el crecimiento y la evolución del sistema</li>
        </ul>
      </div>
      <div className={`${styles.infoBox} ${styles.infoBoxYellow}`}>
        <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleYellow}`}>Implementación en Go</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Interfaces Go:</span> Ideales para implementar puertos y adaptadores</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Structs:</span> Perfectos para modelar entidades y value objects</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Dependency Injection:</span> Manejo limpio de dependencias externas</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Error handling:</span> Control granular de errores de dominio</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Context package:</span> Gestión de contextos entre capas de la aplicación</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Testing:</span> Excelentes herramientas de testing y mocking</li>
        </ul>
      </div>
    </div>

    <div className={`${styles.infoBox} ${styles.infoBoxPurple}`}>
      <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitlePurple}`}>Errores comunes y mejores prácticas</h3>
      <div className={styles.twoColGrid}>
        <div>
          <h4 className={styles.boxTitle}>Errores comunes</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>Filtrar detalles de infraestructura en el dominio</li>
            <li className={styles.listItem}>Interfaces demasiado grandes (violar ISP)</li>
            <li className={styles.listItem}>Agregados demasiado grandes o complejos</li>
            <li className={styles.listItem}>Ignorar los límites de contexto</li>
            <li className={styles.listItem}>Abuso de value objects o entidades</li>
          </ul>
        </div>
        <div>
          <h4 className={styles.boxTitle}>Mejores prácticas</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>Mantener el dominio puro, sin dependencias externas</li>
            <li className={styles.listItem}>Interfaces pequeñas y cohesivas</li>
            <li className={styles.listItem}>Inmutabilidad cuando sea posible</li>
            <li className={styles.listItem}>Transacciones confinadas a los límites del agregado</li>
            <li className={styles.listItem}>Uso adecuado de DTO para transferencia entre capas</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const RecursosContent = () => (
  <div>
    <SectionTitle title="Recursos de Aprendizaje" icon={<Database size={20} className={styles.sectionIcon} />} />
    
    <p className={styles.headerDescription}>Una colección de recursos de alta calidad para profundizar en todos los aspectos del desarrollo con Go, microservicios y sistemas distribuidos.</p>
    
    <div className={styles.resourceGrid}>
      <ResourceCard 
        title="Go Programming Language" 
        type="libro" 
        link="https://www.gopl.io/" 
        description="Escrito por los creadores de Go, es la referencia definitiva para aprender el lenguaje a fondo." 
      />
      <ResourceCard 
        title="Concurrency in Go" 
        type="libro" 
        link="https://www.oreilly.com/library/view/concurrency-in-go/9781491941294/" 
        description="Guía completa sobre patrones de concurrencia, herramientas y técnicas en Go." 
      />
      <ResourceCard 
        title="Distributed Systems with Go" 
        type="libro" 
        link="https://pragprog.com/titles/tjgo/distributed-services-with-go/" 
        description="Cómo construir sistemas distribuidos robustos con Go paso a paso." 
      />
      <ResourceCard 
        title="Go by Example" 
        type="tutorial" 
        link="https://gobyexample.com/" 
        description="Colección de ejemplos anotados que muestran cómo resolver tareas comunes en Go." 
      />
      <ResourceCard 
        title="Tour of Go" 
        type="tutorial" 
        link="https://tour.golang.org/" 
        description="Tutorial interactivo oficial para aprender Go de manera práctica." 
      />
      <ResourceCard 
        title="Documentación Oficial de Go" 
        type="documentación" 
        link="https://golang.org/doc/" 
        description="Documentación oficial completa, incluye tutoriales, guías y referencias." 
      />
      <ResourceCard 
        title="Kubernetes Documentation" 
        type="documentación" 
        link="https://kubernetes.io/docs/" 
        description="Documentación oficial de Kubernetes, fundamental para orquestación de contenedores." 
      />
      <ResourceCard 
        title="Go Patterns for Real-World Problems" 
        type="libro" 
        link="https://www.manning.com/books/design-patterns-in-go" 
        description="Implementación de patrones de diseño para resolver problemas reales con Go." 
      />
      <ResourceCard 
        title="Learn Go with Tests" 
        type="tutorial" 
        link="https://github.com/quii/learn-go-with-tests" 
        description="Aprende Go y TDD simultáneamente con ejercicios prácticos." 
      />
    </div>

    <div className={`${styles.infoBox} ${styles.infoBoxBlue}`}>
      <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleBlue}`}>Comunidades y foros</h3>
      <div className={styles.twoColGrid}>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Go Forum</h4>
          <p className={styles.topicCardDescription}>Foro oficial para discusiones sobre Go</p>
          <a href="https://forum.golangbridge.org/" className={styles.resourceCardLink}>forum.golangbridge.org</a>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Go Slack</h4>
          <p className={styles.topicCardDescription}>Canal de Slack para desarrolladores de Go</p>
          <a href="https://gophers.slack.com/" className={styles.resourceCardLink}>gophers.slack.com</a>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Stack Overflow</h4>
          <p className={styles.topicCardDescription}>Amplia comunidad de preguntas y respuestas</p>
          <a href="https://stackoverflow.com/questions/tagged/go" className={styles.resourceCardLink}>stackoverflow.com/go</a>
        </div>
        <div className={styles.box}>
          <h4 className={styles.boxTitle}>Reddit - /r/golang</h4>
          <p className={styles.topicCardDescription}>Subreddit para desarrolladores de Go</p>
          <a href="https://www.reddit.com/r/golang/" className={styles.resourceCardLink}>reddit.com/r/golang</a>
        </div>
      </div>
    </div>

    <div className={styles.twoColGrid}>
      <div className={`${styles.infoBox} ${styles.infoBoxGreen}`}>
        <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleGreen}`}>Ruta de aprendizaje recomendada</h3>
        <ol className={styles.orderedList}>
          <li className={styles.listItem}>Aprende los fundamentos de Go (sintaxis, tipos, funciones)</li>
          <li className={styles.listItem}>Profundiza en concurrencia con goroutines y channels</li>
          <li className={styles.listItem}>Practica construyendo APIs y servicios web</li>
          <li className={styles.listItem}>Estudia patrones de diseño y arquitecturas en Go</li>
          <li className={styles.listItem}>Domina los principios de DDD y Arquitectura Hexagonal</li>
          <li className={styles.listItem}>Aprende sobre contenedores y Docker</li>
          <li className={styles.listItem}>Implementa microservicios con principios de diseño sólidos</li>
          <li className={styles.listItem}>Aprende sobre orquestación con Kubernetes</li>
          <li className={styles.listItem}>Estudia sistemas distribuidos y patrones avanzados</li>
        </ol>
      </div>
      <div className={`${styles.infoBox} ${styles.infoBoxYellow}`}>
        <h3 className={`${styles.infoBoxTitle} ${styles.infoBoxTitleYellow}`}>Herramientas esenciales</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Go CLI:</span> Comando go para compilación, pruebas, etc.</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>IDEs:</span> VSCode con extensión Go, GoLand, Vim-Go</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Debug:</span> Delve, pprof para perfilado</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Docker:</span> Para contenerización</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Kubernetes:</span> Para orquestación de contenedores</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Git:</span> Control de versiones</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Prometheus/Grafana:</span> Monitorización</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>gRPC:</span> Comunicación entre servicios</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>PostgreSQL/MongoDB:</span> Bases de datos</li>
          <li className={styles.listItem}><span className={styles.listItemLabel}>Air:</span> Recarga en vivo durante el desarrollo</li>
        </ul>
      </div>
    </div>
  </div>
);

export default GoStackGuide;