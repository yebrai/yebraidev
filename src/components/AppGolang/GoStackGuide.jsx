import React, { useState } from 'react';
import { BookOpen, Code, Server, Database, Cloud, Globe, Cpu, Zap, Navigation, GitBranch, Clock, Shield } from 'lucide-react';

const GoStackGuide = () => {
  const [activeTab, setActiveTab] = useState('fundamentos');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col bg-slate-50 rounded-lg shadow-lg p-4 font-sans">
      <header className="mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-blue-800">Stack Completo de Aplicaciones Modernas con Go</h1>
          <div className="p-2 bg-blue-100 rounded-full">
            <Code size={24} className="text-blue-700" />
          </div>
        </div>
        <p className="text-gray-600 mt-2">Una guía completa para desarrolladores backend que quieren dominar Go y sistemas distribuidos</p>
      </header>

      <nav className="mb-6 sticky top-0 z-10">
        <div className="flex flex-wrap gap-2 justify-center">
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

      <main className="bg-white p-6 rounded-lg shadow border border-gray-100 flex-grow transition-all duration-300">
        {activeTab === 'fundamentos' && <FundamentosContent />}
        {activeTab === 'concurrencia' && <ConcurrenciaContent />}
        {activeTab === 'runtime' && <RuntimeContent />}
        {activeTab === 'microservicios' && <MicroserviciosContent />}
        {activeTab === 'kubernetes' && <KubernetesContent />}
        {activeTab === 'distribuidos' && <DistribuidosContent />}
        {activeTab === 'arquitectura' && <ArquitecturaContent />}
        {activeTab === 'recursos' && <RecursosContent />}
      </main>

      <footer className="mt-4 text-center text-sm text-gray-500">
        <p>Diseñado para ayudarte a dominar el stack completo de desarrollo de aplicaciones modernas con Go - 2025</p>
      </footer>
    </div>
  );
};

const TabButton = ({ label, icon, active, onClick }) => (
  <button
    className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
      active ? 'bg-blue-600 text-white shadow-md transform scale-105' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </button>
);

const SectionTitle = ({ title, icon }) => (
  <div className="flex items-center gap-2 mb-4">
    <div className="p-2 bg-blue-100 rounded-full">
      {icon}
    </div>
    <h2 className="text-xl font-bold text-blue-800">{title}</h2>
  </div>
);

const TopicCard = ({ title, description, level }) => {
  const levelColors = {
    básico: 'bg-green-100 text-green-800 border-green-200',
    intermedio: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    avanzado: 'bg-red-100 text-red-800 border-red-200',
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md hover:translate-y-1">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-800">{title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium ${levelColors[level]}`}>
          {level}
        </span>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const ResourceCard = ({ title, type, link, description }) => {
  const typeIcons = {
    libro: <BookOpen size={16} className="text-purple-600" />,
    tutorial: <Code size={16} className="text-green-600" />,
    documentación: <BookOpen size={16} className="text-blue-600" />,
    artículo: <BookOpen size={16} className="text-orange-600" />,
    video: <BookOpen size={16} className="text-red-600" />,
    herramienta: <Cpu size={16} className="text-gray-600" />,
  };

  const typeColors = {
    libro: 'bg-purple-100 text-purple-800',
    tutorial: 'bg-green-100 text-green-800',
    documentación: 'bg-blue-100 text-blue-800',
    artículo: 'bg-orange-100 text-orange-800',
    video: 'bg-red-100 text-red-800',
    herramienta: 'bg-gray-100 text-gray-800',
  };

  return (
    <div className="border border-gray-200 rounded-lg p-4 transition-all hover:shadow-md hover:-translate-y-1">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-gray-800">{title}</h3>
        <span className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${typeColors[type]}`}>
          {typeIcons[type]} {type}
        </span>
      </div>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-600 text-sm hover:underline inline-flex items-center gap-1"
      >
        Ver recurso <Navigation size={14} />
      </a>
    </div>
  );
};

// Contenido de las pestañas
const FundamentosContent = () => (
  <div>
    <SectionTitle title="Fundamentos de Go" icon={<BookOpen size={20} className="text-blue-700" />} />
    
    <p className="mb-4">Go (o Golang) es un lenguaje de programación desarrollado por Google, diseñado para ser simple, eficiente y potente. Aquí encontrarás los conceptos fundamentales que necesitas dominar.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
      <h3 className="font-bold text-blue-800 mb-2">¿Por qué Go?</h3>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li><span className="font-medium">Simplicidad:</span> Sintaxis clara y concisa que facilita el mantenimiento y la legibilidad.</li>
        <li><span className="font-medium">Compilación:</span> Genera binarios nativos sin dependencias externas para múltiples plataformas.</li>
        <li><span className="font-medium">Rendimiento:</span> Ofrece rendimiento cercano a C/C++ con la facilidad de un lenguaje moderno.</li>
        <li><span className="font-medium">Concurrencia:</span> Soporte nativo para programación concurrente con goroutines y channels.</li>
        <li><span className="font-medium">Biblioteca estándar:</span> Amplia y potente, reduce la necesidad de dependencias externas.</li>
        <li><span className="font-medium">Ecosistema cloud:</span> Muchas herramientas cloud están escritas en Go (Docker, Kubernetes, etc.).</li>
      </ul>
    </div>
  </div>
);

const ConcurrenciaContent = () => (
  <div>
    <SectionTitle title="Concurrencia en Go" icon={<Zap size={20} className="text-blue-700" />} />
    
    <p className="mb-4">La concurrencia es una de las características más potentes de Go. El modelo de concurrencia de Go basado en goroutines y channels permite crear programas eficientes que aprovechan los sistemas multinúcleo modernos.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-6">
      <h3 className="font-bold text-blue-800 mb-2">Diferencias entre Concurrencia y Paralelismo</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 bg-white rounded-lg shadow-sm">
          <h4 className="font-semibold text-blue-700">Concurrencia</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Lidiar con múltiples tareas al mismo tiempo</li>
            <li>No implica ejecución simultánea</li>
            <li>Estructura de un programa</li>
            <li>Gestión de múltiples tareas</li>
          </ul>
        </div>
        <div className="p-3 bg-white rounded-lg shadow-sm">
          <h4 className="font-semibold text-blue-700">Paralelismo</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Ejecutar múltiples tareas simultáneamente</li>
            <li>Requiere múltiples procesadores/núcleos</li>
            <li>Ejecución de un programa</li>
            <li>Aprovechamiento de múltiples CPU</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
      <h3 className="font-bold text-yellow-800 mb-2">Consejo práctico</h3>
      <p className="text-gray-700">
        "No comuniques compartiendo memoria; comparte memoria comunicando" - Es uno de los principios fundamentales de concurrencia en Go. En lugar de usar variables compartidas protegidas por locks, usa channels para pasar datos entre goroutines.
      </p>
    </div>
  </div>
);

const RuntimeContent = () => (
  <div>
    <SectionTitle title="Runtime y Compilación de Go" icon={<Cpu size={20} className="text-blue-700" />} />
    
    <p className="mb-4">Uno de los aspectos distintivos de Go es su proceso de compilación y su runtime. Entender cómo funciona internamente te ayudará a optimizar tus aplicaciones y comprender mejor el comportamiento del lenguaje.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="font-bold text-blue-800 mb-2">Ventajas de la compilación en Go</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Binarios autónomos sin dependencias externas</li>
          <li>Rendimiento nativo cercano a C/C++</li>
          <li>No requiere intérpretes o máquinas virtuales</li>
          <li>Verificación de tipos en tiempo de compilación</li>
          <li>Tiempos de compilación rápidos</li>
          <li>Fácil despliegue en contenedores</li>
        </ul>
      </div>
      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
        <h3 className="font-bold text-green-800 mb-2">Diferencias con PHP</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>PHP: Interpretado, Go: Compilado</li>
          <li>PHP: Tipado dinámico, Go: Tipado estático</li>
          <li>PHP: Requiere intérprete para ejecutarse, Go: Binarios autónomos</li>
          <li>PHP: Orientado a scripting web, Go: Propósito general</li>
          <li>PHP: Mayor overhead de memoria, Go: Muy eficiente en memoria</li>
          <li>PHP: Concurrencia limitada, Go: Excelente soporte para concurrencia</li>
        </ul>
      </div>
    </div>

    <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
      <h3 className="font-bold text-gray-800 mb-2">Proceso de compilación de Go</h3>
      <ol className="list-decimal pl-5 space-y-2 text-gray-700">
        <li><span className="font-medium">Análisis léxico:</span> Convierte el código fuente en tokens</li>
        <li><span className="font-medium">Análisis sintáctico:</span> Construye el árbol de sintaxis abstracta (AST)</li>
        <li><span className="font-medium">Comprobación de tipos:</span> Verifica la consistencia de tipos</li>
        <li><span className="font-medium">Optimizaciones:</span> Análisis de escape, inlining, eliminación de código muerto</li>
        <li><span className="font-medium">Generación de código:</span> Traducción a código máquina nativo</li>
        <li><span className="font-medium">Enlazado (linking):</span> Resolución de referencias y creación del binario final</li>
      </ol>
    </div>
  </div>
);

const MicroserviciosContent = () => (
  <div>
    <SectionTitle title="Microservicios con Go" icon={<Server size={20} className="text-blue-700" />} />
    
    <p className="mb-4">Go es un lenguaje ideal para implementar arquitecturas de microservicios gracias a su eficiencia, rendimiento y soporte para concurrencia. Aprende a construir sistemas robustos y escalables basados en microservicios.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-6">
      <h3 className="font-bold text-blue-800 mb-2">¿Por qué Go para microservicios?</h3>
      <ul className="list-disc pl-5 space-y-1 text-gray-700">
        <li><span className="font-medium">Eficiencia:</span> Bajo consumo de recursos y inicio rápido, ideal para contenedores</li>
        <li><span className="font-medium">Concurrencia:</span> Manejo nativo de múltiples conexiones simultáneas</li>
        <li><span className="font-medium">Binarios pequeños:</span> Despliegues rápidos y contenedores ligeros</li>
        <li><span className="font-medium">Biblioteca estándar:</span> Soporte nativo para HTTP, JSON, etc.</li>
        <li><span className="font-medium">Ecosistema:</span> Múltiples frameworks y herramientas para microservicios</li>
        <li><span className="font-medium">Compilación estática:</span> Fácil distribución y despliegue sin dependencias</li>
      </ul>
    </div>

    <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
      <h3 className="font-bold text-purple-800 mb-2">Frameworks populares para microservicios en Go</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 bg-white rounded shadow-sm">
          <h4 className="font-semibold text-purple-700">Go Kit</h4>
          <p className="text-sm text-gray-600">Toolkit para construir microservicios robustos y de nivel empresarial</p>
        </div>
        <div className="p-3 bg-white rounded shadow-sm">
          <h4 className="font-semibold text-purple-700">Gin</h4>
          <p className="text-sm text-gray-600">Framework web ligero con excelente rendimiento para APIs</p>
        </div>
        <div className="p-3 bg-white rounded shadow-sm">
          <h4 className="font-semibold text-purple-700">Echo</h4>
          <p className="text-sm text-gray-600">Framework minimalista de alto rendimiento</p>
        </div>
        <div className="p-3 bg-white rounded shadow-sm">
          <h4 className="font-semibold text-purple-700">Micro</h4>
          <p className="text-sm text-gray-600">Plataforma para desarrollo de microservicios</p>
        </div>
        <div className="p-3 bg-white rounded shadow-sm">
          <h4 className="font-semibold text-purple-700">Fiber</h4>
          <p className="text-sm text-gray-600">Framework web inspirado en Express.js con alto rendimiento</p>
        </div>
        <div className="p-3 bg-white rounded shadow-sm">
          <h4 className="font-semibold text-purple-700">gRPC-Go</h4>
          <p className="text-sm text-gray-600">Implementación de gRPC para comunicación entre servicios</p>
        </div>
      </div>
    </div>
  </div>
);

const KubernetesContent = () => (
  <div>
    <SectionTitle title="Kubernetes y Orquestación" icon={<Cloud size={20} className="text-blue-700" />} />
    
    <p className="mb-4">Kubernetes (K8s) es la plataforma líder para orquestar contenedores, permitiendo automatizar el despliegue, escalado y gestión de aplicaciones. Aprende cómo utilizarlo para desplegar tus microservicios en Go.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="font-bold text-blue-800 mb-2">¿Por qué Kubernetes?</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Autoescalado de aplicaciones basado en uso de recursos</li>
          <li>Alta disponibilidad mediante réplicas y autorecuperación</li>
          <li>Distribución de tráfico y balanceo de carga</li>
          <li>Despliegues y rollbacks automatizados</li>
          <li>Gestión de secretos y configuraciones</li>
          <li>Abstracción sobre múltiples proveedores cloud</li>
        </ul>
      </div>
      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
        <h3 className="font-bold text-green-800 mb-2">Go y Kubernetes</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li>Kubernetes está escrito en Go</li>
          <li>Cliente oficial (client-go) para integración con Kubernetes</li>
          <li>Excelente soporte para crear operadores y extensiones</li>
          <li>Aplicaciones Go generan binarios pequeños, ideales para contenedores</li>
          <li>Menor consumo de recursos en entornos Kubernetes</li>
          <li>Arranque rápido para escalado eficiente</li>
        </ul>
      </div>
    </div>

    <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
      <h3 className="font-bold text-yellow-800 mb-2">Arquitectura típica de microservicios en Kubernetes</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center">
        <div className="p-2 bg-white rounded border border-yellow-200">
          <h4 className="font-semibold text-yellow-700 text-sm">Ingress</h4>
          <p className="text-xs text-gray-600">Gestión de tráfico externo</p>
        </div>
        <div className="p-2 bg-white rounded border border-yellow-200">
          <h4 className="font-semibold text-yellow-700 text-sm">API Gateway</h4>
          <p className="text-xs text-gray-600">Ruteo y autenticación</p>
        </div>
        <div className="p-2 bg-white rounded border border-yellow-200">
          <h4 className="font-semibold text-yellow-700 text-sm">Microservicios</h4>
          <p className="text-xs text-gray-600">Lógica de negocio</p>
        </div>
        <div className="p-2 bg-white rounded border border-yellow-200">
          <h4 className="font-semibold text-yellow-700 text-sm">Bases de datos</h4>
          <p className="text-xs text-gray-600">Persistencia</p>
        </div>
        
        <div className="p-2 bg-white rounded border border-yellow-200">
          <h4 className="font-semibold text-yellow-700 text-sm">Service Discovery</h4>
          <p className="text-xs text-gray-600">Localización de servicios</p>
        </div>
        <div className="p-2 bg-white rounded border border-yellow-200">
          <h4 className="font-semibold text-yellow-700 text-sm">Config Maps</h4>
          <p className="text-xs text-gray-600">Configuración dinámica</p>
        </div>
        <div className="p-2 bg-white rounded border border-yellow-200">
          <h4 className="font-semibold text-yellow-700 text-sm">Secrets</h4>
          <p className="text-xs text-gray-600">Datos sensibles</p>
        </div>
        <div className="p-2 bg-white rounded border border-yellow-200">
          <h4 className="font-semibold text-yellow-700 text-sm">Monitoring</h4>
          <p className="text-xs text-gray-600">Observabilidad</p>
        </div>
      </div>
    </div>
  </div>
);

const DistribuidosContent = () => (
  <div>
    <SectionTitle title="Sistemas Distribuidos" icon={<Globe size={20} className="text-blue-700" />} />
    
    <p className="mb-4">Go es una excelente elección para construir sistemas distribuidos gracias a su eficiencia, concurrencia y rendimiento. Aprende los fundamentos y patrones para construir sistemas distribuidos robustos y escalables.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
        <h3 className="font-bold text-blue-800 mb-2">Desafíos de los sistemas distribuidos</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><span className="font-medium">Latencia:</span> Retardos en la comunicación entre nodos</li>
          <li><span className="font-medium">Fallos parciales:</span> Componentes individuales pueden fallar mientras otros siguen funcionando</li>
          <li><span className="font-medium">Consistencia de datos:</span> Mantener datos coherentes entre diferentes nodos</li>
          <li><span className="font-medium">Particiones de red:</span> Segmentos de la red pueden quedar aislados temporalmente</li>
          <li><span className="font-medium">Concurrencia:</span> Múltiples operaciones ocurriendo simultáneamente</li>
          <li><span className="font-medium">Escalabilidad:</span> Mantener rendimiento al crecer el sistema</li>
        </ul>
      </div>
      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
        <h3 className="font-bold text-green-800 mb-2">¿Por qué Go para sistemas distribuidos?</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><span className="font-medium">Concurrencia nativa:</span> Goroutines y channels facilitan operaciones concurrentes</li>
          <li><span className="font-medium">Networking potente:</span> Excelente biblioteca estándar para comunicaciones en red</li>
          <li><span className="font-medium">Eficiencia:</span> Bajo consumo de recursos para entornos cloud</li>
          <li><span className="font-medium">Tiempos de inicio rápidos:</span> Ideal para escalado dinámico</li>
          <li><span className="font-medium">Simplicidad:</span> Código mantenible para sistemas complejos</li>
          <li><span className="font-medium">Ecosistema:</span> Muchas herramientas y bibliotecas para sistemas distribuidos</li>
        </ul>
      </div>
    </div>

    <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
      <h3 className="font-bold text-purple-800 mb-2">Teorema CAP y diseño de sistemas distribuidos</h3>
      <p className="text-gray-700 mb-4">
        El teorema CAP establece que un sistema distribuido no puede proporcionar simultáneamente más de dos de estas garantías:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-3 bg-white rounded shadow-sm">
          <h4 className="font-semibold text-purple-700">Consistencia (C)</h4>
          <p className="text-sm text-gray-600">Todos los nodos ven los mismos datos al mismo tiempo</p>
        </div>
        <div className="p-3 bg-white rounded shadow-sm">
          <h4 className="font-semibold text-purple-700">Disponibilidad (A)</h4>
          <p className="text-sm text-gray-600">Cada petición recibe una respuesta (sin garantía de que contenga los datos más recientes)</p>
        </div>
        <div className="p-3 bg-white rounded shadow-sm">
          <h4 className="font-semibold text-purple-700">Tolerancia a particiones (P)</h4>
          <p className="text-sm text-gray-600">El sistema sigue funcionando aunque haya fallos en la comunicación entre nodos</p>
        </div>
      </div>
    </div>
  </div>
);

const ArquitecturaContent = () => (
  <div>
    <SectionTitle title="DDD y Arquitectura Hexagonal en Go" icon={<GitBranch size={20} className="text-blue-700" />} />
    
    <p className="mb-4">La Arquitectura Hexagonal y el Domain-Driven Design (DDD) son enfoques poderosos para organizar aplicaciones complejas. Go es un excelente lenguaje para implementar estos patrones gracias a su sistema de interfaces y su claridad sintáctica.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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

    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-6">
      <h3 className="font-bold text-blue-800 mb-2">Estructura de Proyecto en Arquitectura Hexagonal</h3>
      <div className="bg-gray-800 text-white p-3 rounded-md text-sm overflow-x-auto">
        <pre className="whitespace-pre-wrap">
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

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
        <h3 className="font-bold text-green-800 mb-2">Beneficios de Arquitectura Hexagonal en Go</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><span className="font-medium">Separación de preocupaciones:</span> Aislamiento claro de la lógica de dominio</li>
          <li><span className="font-medium">Testabilidad:</span> Facilidad para realizar pruebas unitarias y de integración</li>
          <li><span className="font-medium">Flexibilidad:</span> Cambiar adaptadores sin modificar el núcleo de la aplicación</li>
          <li><span className="font-medium">Mantenibilidad:</span> Código más organizado y con menor acoplamiento</li>
          <li><span className="font-medium">Evolución:</span> Facilita el crecimiento y la evolución del sistema</li>
        </ul>
      </div>
      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
        <h3 className="font-bold text-yellow-800 mb-2">Implementación en Go</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><span className="font-medium">Interfaces Go:</span> Ideales para implementar puertos y adaptadores</li>
          <li><span className="font-medium">Structs:</span> Perfectos para modelar entidades y value objects</li>
          <li><span className="font-medium">Dependency Injection:</span> Manejo limpio de dependencias externas</li>
          <li><span className="font-medium">Error handling:</span> Control granular de errores de dominio</li>
          <li><span className="font-medium">Context package:</span> Gestión de contextos entre capas de la aplicación</li>
          <li><span className="font-medium">Testing:</span> Excelentes herramientas de testing y mocking</li>
        </ul>
      </div>
    </div>

    <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
      <h3 className="font-bold text-purple-800 mb-2">Errores comunes y mejores prácticas</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-purple-700">Errores comunes</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Filtrar detalles de infraestructura en el dominio</li>
            <li>Interfaces demasiado grandes (violar ISP)</li>
            <li>Agregados demasiado grandes o complejos</li>
            <li>Ignorar los límites de contexto</li>
            <li>Abuso de value objects o entidades</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-purple-700">Mejores prácticas</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Mantener el dominio puro, sin dependencias externas</li>
            <li>Interfaces pequeñas y cohesivas</li>
            <li>Inmutabilidad cuando sea posible</li>
            <li>Transacciones confinadas a los límites del agregado</li>
            <li>Uso adecuado de DTO para transferencia entre capas</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

const RecursosContent = () => (
  <div>
    <SectionTitle title="Recursos de Aprendizaje" icon={<Database size={20} className="text-blue-700" />} />
    
    <p className="mb-4">Una colección de recursos de alta calidad para profundizar en todos los aspectos del desarrollo con Go, microservicios y sistemas distribuidos.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
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

    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100 mb-6">
      <h3 className="font-bold text-blue-800 mb-2">Comunidades y foros</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-blue-700">Go Forum</h4>
          <p className="text-sm text-gray-600">Foro oficial para discusiones sobre Go</p>
          <a href="https://forum.golangbridge.org/" className="text-blue-600 text-xs hover:underline">forum.golangbridge.org</a>
        </div>
        <div className="p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-blue-700">Go Slack</h4>
          <p className="text-sm text-gray-600">Canal de Slack para desarrolladores de Go</p>
          <a href="https://gophers.slack.com/" className="text-blue-600 text-xs hover:underline">gophers.slack.com</a>
        </div>
        <div className="p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-blue-700">Stack Overflow</h4>
          <p className="text-sm text-gray-600">Amplia comunidad de preguntas y respuestas</p>
          <a href="https://stackoverflow.com/questions/tagged/go" className="text-blue-600 text-xs hover:underline">stackoverflow.com/go</a>
        </div>
        <div className="p-3 bg-white rounded shadow-sm hover:shadow-md transition-shadow">
          <h4 className="font-semibold text-blue-700">Reddit - /r/golang</h4>
          <p className="text-sm text-gray-600">Subreddit para desarrolladores de Go</p>
          <a href="https://www.reddit.com/r/golang/" className="text-blue-600 text-xs hover:underline">reddit.com/r/golang</a>
        </div>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="p-4 bg-green-50 rounded-lg border border-green-100">
        <h3 className="font-bold text-green-800 mb-2">Ruta de aprendizaje recomendada</h3>
        <ol className="list-decimal pl-5 space-y-1 text-gray-700">
          <li>Aprende los fundamentos de Go (sintaxis, tipos, funciones)</li>
          <li>Profundiza en concurrencia con goroutines y channels</li>
          <li>Practica construyendo APIs y servicios web</li>
          <li>Estudia patrones de diseño y arquitecturas en Go</li>
          <li>Domina los principios de DDD y Arquitectura Hexagonal</li>
          <li>Aprende sobre contenedores y Docker</li>
          <li>Implementa microservicios con principios de diseño sólidos</li>
          <li>Aprende sobre orquestación con Kubernetes</li>
          <li>Estudia sistemas distribuidos y patrones avanzados</li>
        </ol>
      </div>
      <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-100">
        <h3 className="font-bold text-yellow-800 mb-2">Herramientas esenciales</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700">
          <li><span className="font-medium">Go CLI:</span> Comando go para compilación, pruebas, etc.</li>
          <li><span className="font-medium">IDEs:</span> VSCode con extensión Go, GoLand, Vim-Go</li>
          <li><span className="font-medium">Debug:</span> Delve, pprof para perfilado</li>
          <li><span className="font-medium">Docker:</span> Para contenerización</li>
          <li><span className="font-medium">Kubernetes:</span> Para orquestación de contenedores</li>
          <li><span className="font-medium">Git:</span> Control de versiones</li>
          <li><span className="font-medium">Prometheus/Grafana:</span> Monitorización</li>
          <li><span className="font-medium">gRPC:</span> Comunicación entre servicios</li>
          <li><span className="font-medium">PostgreSQL/MongoDB:</span> Bases de datos</li>
          <li><span className="font-medium">Air:</span> Recarga en vivo durante el desarrollo</li>
        </ul>
      </div>
    </div>
  </div>
);

export default GoStackGuide;