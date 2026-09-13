const topicData = {
	robotics: { kicker: '01 / FOUNDATION', title: 'Robotics & Electronics', summary: 'Learn how sensors, circuits, controllers and motors work together to make machines sense, move and respond.', learnings: ['Sensors, actuators and motor drivers', 'Arduino, ESP32 and Raspberry Pi control', 'LEDs, displays, buzzers and relays', 'Breadboard circuits and safe prototyping'], useTitle: 'Automation and smart machines', use: 'The same building blocks power factory robots, delivery systems, assistive devices and smart products.', project: 'Build a sensor-guided rover that detects an obstacle and changes direction.', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85' },
	coding: { kicker: '02 / CREATE', title: 'Programming & Coding', summary: 'Turn ideas into instructions with visual coding first, then Python, C/C++, MicroPython, VS Code and Git.', learnings: ['Block coding, Scratch and PictoBlox', 'Arduino IDE and C/C++ fundamentals', 'Python, MicroPython and control flow', 'VS Code and Git/GitHub workflows'], useTitle: 'Software behind every robot', use: 'Programming is used in embedded products, websites, data tools, automation systems and every autonomous machine.', project: 'Program an ESP32 rover from sensor input to motor movement.', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85' },
	ai: { kicker: '03 / THINK', title: 'Artificial Intelligence', summary: 'Understand how data and trained models help machines classify, predict and make useful decisions.', learnings: ['AI and machine learning fundamentals', 'Datasets, features and model concepts', 'Image classification and object detection', 'Pose, gesture and responsible automation'], useTitle: 'Decision support and intelligent tools', use: 'AI is used in quality inspection, healthcare support, agriculture, accessibility tools and logistics.', project: 'Train a simple image classifier that sorts objects into useful categories.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85' },
	vision: { kicker: '04 / SEE', title: 'Computer Vision', summary: 'Use cameras and code to help a computer interpret images, video, colour, shapes and movement.', learnings: ['Camera-based projects and image processing', 'Object detection, tracking and counting', 'Colour and shape recognition', 'OpenCV with Python'], useTitle: 'Inspection, safety and navigation', use: 'Computer vision helps robots navigate, factories inspect products, and systems understand visual environments.', project: 'Create an AI vision counter that detects and counts objects on a table.', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85' },
	iot: { kicker: '05 / CONNECT', title: 'IoT & Smart Automation', summary: 'Connect sensors, devices and dashboards so physical systems can be monitored and controlled remotely.', learnings: ['Wi-Fi, Bluetooth and MQTT messaging', 'ESP32 smart systems', 'Web dashboards and cloud connectivity', 'Remote monitoring and home automation'], useTitle: 'Connected homes and industries', use: 'IoT is used for smart agriculture, energy monitoring, weather stations, homes and predictive maintenance.', project: 'Build a soil-monitoring station that sends live readings to a web dashboard.', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85' },
	mechanical: { kicker: '06 / ENGINEER', title: 'Mechanical Design', summary: 'Design the physical body of a machine, from chassis and gears to joints, grippers and printable prototypes.', learnings: ['Chassis, wheels, gears and bearings', 'Mechanical joints and robotic grippers', 'CAD basics and 3D printing', 'Fabrication, assembly and testing'], useTitle: 'Products that move in the real world', use: 'Mechanical design shapes robots, prosthetics, manufacturing tools, drones and every machine that must carry force.', project: 'Design and print a gripper that can pick up and sort different objects.', image: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&w=1200&q=85' },
	advanced: { kicker: '07 / ADVANCE', title: 'Advanced Robotics', summary: 'Bring code, electronics, mechanics and AI together to build autonomous systems that navigate and act.', learnings: ['Autonomous robots and obstacle avoidance', 'AGV/AMR and navigation concepts', 'ROS 2 nodes, topics and actions', 'Simulation, SLAM and robot descriptions'], useTitle: 'Autonomous mobility and research', use: 'Advanced robotics is used in warehouses, hospitals, exploration, transport and next-generation research labs.', project: 'Simulate an autonomous mobile robot that maps a room and follows a route.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85' },
	scratch: { kicker: 'BEGINNER / VISUAL CODE', title: 'Scratch', summary: 'A friendly block-based environment where beginners learn logic by making stories, games and interactive machines.', learnings: ['Sequences, events and loops', 'Variables, conditions and game logic', 'Creative problem solving', 'First steps toward robotics control'], useTitle: 'Learning logic through play', use: 'Scratch is used in classrooms and creative coding programs to build computational thinking before text-based code.', project: 'Create a robot maze game where a character avoids obstacles and reaches a charging station.', image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=85' },
	pictoblox: { kicker: 'BEGINNER / AI ROBOTICS', title: 'PictoBlox', summary: 'Combine block coding with AI, robotics, speech and vision extensions for hands-on smart projects.', learnings: ['Visual programming and hardware control', 'AI camera and speech extensions', 'Robotics logic and events', 'Prototype testing and iteration'], useTitle: 'Accessible AI prototyping', use: 'PictoBlox helps young makers quickly prototype interactive classroom tools, robots and vision experiments.', project: 'Make a camera-enabled robot that recognizes a hand gesture and reacts with lights.', image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85' },
	tinkercad: { kicker: 'BEGINNER / SIMULATION', title: 'Tinkercad', summary: 'Simulate circuits and design simple 3D parts safely before using real components and tools.', learnings: ['Virtual breadboard wiring', 'Arduino circuit simulation', 'Simple CAD shapes and dimensions', 'Prototype planning and debugging'], useTitle: 'Safer early-stage prototyping', use: 'Simulation is used by engineers and students to test ideas before spending time or materials on a physical build.', project: 'Design a simulated traffic light with buttons, LEDs and a timed controller.', image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=1200&q=85' },
	python: { kicker: 'INTERMEDIATE / PROGRAMMING', title: 'Python', summary: 'A readable language for robotics logic, Raspberry Pi GPIO, data, automation and artificial intelligence.', learnings: ['Variables, functions and object-oriented basics', 'GPIO and sensor control', 'Data handling and automation', 'Python libraries for AI and vision'], useTitle: 'Automation and intelligent software', use: 'Python is widely used in research, data science, robotics, web services and rapid AI development.', project: 'Use Python and GPIO to read a distance sensor and control a motor safely.', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=85' },
	opencv: { kicker: 'INTERMEDIATE / COMPUTER VISION', title: 'OpenCV', summary: 'A practical toolkit for reading camera feeds, processing images, tracking objects and building vision counters.', learnings: ['Images, frames and colour spaces', 'Thresholding and image filters', 'Object tracking and contours', 'Python camera applications'], useTitle: 'Seeing and measuring the physical world', use: 'OpenCV supports inspection, retail analytics, sports analysis, robotics navigation and research prototypes.', project: 'Build a colour and shape sorter that guides objects into different trays.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=85' },
	tensorflow: { kicker: 'ADVANCED / MACHINE LEARNING', title: 'TensorFlow / YOLO', summary: 'Work with trained models for image classification and fast object detection in real-time projects.', learnings: ['Training data and model evaluation', 'Classification versus detection', 'Inference and confidence scores', 'Responsible use of vision models'], useTitle: 'Fast visual decisions', use: 'These tools are used for inspection, inventory, traffic analysis, agriculture and assistive technology.', project: 'Train a detector that identifies recyclable items and triggers a sorting mechanism.', image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=1200&q=85' },
	ros2: { kicker: 'PROFESSIONAL / ROBOTICS', title: 'ROS 2 / Gazebo', summary: 'Learn the professional robotics ecosystem for reusable nodes, communication, simulation and robot control.', learnings: ['Nodes, topics, services and actions', 'Python and C++ robotics packages', 'Robot descriptions and sensors', 'Gazebo simulation and navigation'], useTitle: 'Robots at research and industry scale', use: 'ROS 2 is used to prototype autonomous vehicles, warehouse robots, research platforms and complex robot behaviors.', project: 'Simulate a mobile robot that publishes sensor data and navigates between waypoints.', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=85' },
	cad: { kicker: 'PROFESSIONAL / FABRICATION', title: 'CAD + 3D Printing', summary: 'Turn a digital design into a physical part that can be assembled, tested and improved.', learnings: ['Sketches, dimensions and constraints', 'Chassis and enclosure design', 'PLA/PETG print planning', 'Iteration from prototype feedback'], useTitle: 'From digital model to manufactured part', use: 'CAD and additive manufacturing are used in product design, robotics, engineering, education and rapid manufacturing.', project: 'Design and print a custom robot chassis with mounts for sensors and a battery.', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=85' }
};

const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
if (menu && nav) {
	menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', open); });
	document.querySelectorAll('nav a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
const leadForm = document.querySelector('#lead-form');
const toast = document.querySelector('.toast');
const queryForm = document.querySelector('#query-form');
if (toast) {
	[leadForm, queryForm].filter(Boolean).forEach(form => form.addEventListener('submit', event => {
		event.preventDefault();
		event.currentTarget.reset();
		toast.classList.add('show');
		setTimeout(() => toast.classList.remove('show'), 3500);
	}));
}
const definitionPanel = document.querySelector('#definition-panel');
if (definitionPanel) {
	const definitionTitle = definitionPanel.querySelector('h3');
	const definitionText = definitionPanel.querySelector('p');
	const definitionLink = definitionPanel.querySelector('#definition-link');
	const definitionTriggers = document.querySelectorAll('.definition-trigger');
	const getTopicSlug = trigger => {
		if (trigger.id) return trigger.id;
		const label = trigger.textContent.trim().toLowerCase();
		const toolSlugs = [['pictoblox', 'pictoblox'], ['tinkercad', 'tinkercad'], ['scratch', 'scratch'], ['tensorflow', 'tensorflow'], ['opencv', 'opencv'], ['python', 'python'], ['ros 2', 'ros2'], ['cad + 3d', 'cad']];
		return toolSlugs.find(([name]) => label.includes(name))?.[1] || 'robotics';
	};
	const showDefinition = trigger => {
		const topicSlug = getTopicSlug(trigger);
		definitionTitle.textContent = trigger.querySelector('h2')?.textContent || topicData[topicSlug]?.title || trigger.textContent.trim();
		definitionText.textContent = trigger.dataset.definition;
		if (definitionLink) definitionLink.href = `topic.html?topic=${topicSlug}`;
		definitionPanel.hidden = false;
		definitionPanel.classList.add('is-visible');
	};
	definitionTriggers.forEach(trigger => {
		trigger.addEventListener('click', () => showDefinition(trigger));
		trigger.addEventListener('keydown', event => {
			if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); showDefinition(trigger); }
		});
	});
}
const topicPage = document.querySelector('.topic-page');
if (topicPage) {
	const slug = new URLSearchParams(window.location.search).get('topic') || 'robotics';
	const topic = topicData[slug] || topicData.robotics;
	document.title = `${topic.title} | RoboNex AI`;
	topicPage.querySelector('#topic-kicker').textContent = topic.kicker;
	topicPage.querySelector('#topic-title').textContent = topic.title;
	topicPage.querySelector('#topic-summary').textContent = topic.summary;
	const topicImage = topicPage.querySelector('#topic-image');
	topicImage.src = topic.image;
	topicImage.alt = `${topic.title} project in the RoboNex lab`;
	const learningIcons = ['⌘', '◉', '⚙', '✦'];
	topicPage.querySelector('#topic-learnings').innerHTML = topic.learnings.map((item, index) => `<li tabindex="0"><span class="learn-icon" title="Learning step">${learningIcons[index % learningIcons.length]}</span><span>${item}</span></li>`).join('');
	topicPage.querySelector('#topic-use-title').textContent = topic.useTitle;
	topicPage.querySelector('#topic-use').textContent = topic.use;
	topicPage.querySelector('#topic-project').textContent = topic.project;
}
const curriculumTree = document.querySelector('.learning-tree');
if (curriculumTree) {
	const iconForText = text => {
		const value = text.toLowerCase();
		if (value.includes('sensor') || value.includes('camera')) return '◉';
		if (value.includes('motor') || value.includes('actuator') || value.includes('robot')) return '↻';
		if (value.includes('arduino') || value.includes('esp32') || value.includes('raspberry')) return '▣';
		if (value.includes('circuit') || value.includes('breadboard') || value.includes('led')) return '⌬';
		if (value.includes('python') || value.includes('code') || value.includes('program')) return 'Py';
		if (value.includes('ai') || value.includes('machine') || value.includes('dataset')) return 'AI';
		if (value.includes('wifi') || value.includes('mqtt') || value.includes('cloud')) return '⌁';
		if (value.includes('cad') || value.includes('gear') || value.includes('gripper')) return '3D';
		if (value.includes('ros') || value.includes('slam') || value.includes('navigation')) return 'R2';
		return '✦';
	};
	curriculumTree.querySelectorAll('.tree-card li').forEach(item => {
		const icon = document.createElement('span');
		icon.className = 'tree-item-logo';
		icon.title = 'Related skill';
		icon.textContent = iconForText(item.textContent);
		item.prepend(icon);
	});
}
const tiltSurfaces = document.querySelectorAll('[data-tilt]');
if (tiltSurfaces.length && window.matchMedia('(hover: hover)').matches) {
	tiltSurfaces.forEach(surface => {
		surface.addEventListener('pointermove', event => {
			const bounds = surface.getBoundingClientRect();
			const rotateX = ((event.clientY - bounds.top) / bounds.height - 0.5) * -7;
			const rotateY = ((event.clientX - bounds.left) / bounds.width - 0.5) * 7;
			surface.style.setProperty('--tilt-x', `${rotateX}deg`);
			surface.style.setProperty('--tilt-y', `${rotateY}deg`);
		});
		surface.addEventListener('pointerleave', () => {
			surface.style.setProperty('--tilt-x', '0deg');
			surface.style.setProperty('--tilt-y', '0deg');
		});
	});
}
const homePage = document.querySelector('.home-page');
if (homePage && 'IntersectionObserver' in window) {
	const revealItems = homePage.querySelectorAll('main > section:not(.home-hero), .home-pillars > a');
	revealItems.forEach((item, index) => {
		item.classList.add('scroll-reveal');
		item.style.setProperty('--reveal-delay', `${Math.min(index * 70, 280)}ms`);
	});
	const revealObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('is-revealed');
				revealObserver.unobserve(entry.target);
			}
		});
	}, { threshold: 0.14 });
	revealItems.forEach(item => revealObserver.observe(item));
}

// 1-Line Tree Timeline Scroll-Down Reveal ("jese slide kru vese vese niche aaye vo")
const treeCards = document.querySelectorAll('.tree-card');
if (treeCards.length && 'IntersectionObserver' in window) {
	const treeObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
			}
		});
	}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
	treeCards.forEach(card => treeObserver.observe(card));
} else {
	treeCards.forEach(card => card.classList.add('in-view'));
}

// Top scroll progress bar & dynamic tree progress line
const progressBar = document.createElement('div');
progressBar.id = 'scroll-progress';
document.body.prepend(progressBar);

const updateScrollProgress = () => {
	const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
	const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	if (height > 0) {
		const scrolled = (winScroll / height) * 100;
		progressBar.style.width = scrolled + '%';
	}
	
	const treeProgress = document.getElementById('tree-progress');
	const treeTimeline = document.querySelector('.tree-timeline');
	if (treeProgress && treeTimeline) {
		const rect = treeTimeline.getBoundingClientRect();
		const viewH = window.innerHeight;
		if (rect.top < viewH && rect.bottom > 0) {
			const progress = Math.min(100, Math.max(0, ((viewH * 0.72 - rect.top) / rect.height) * 100));
			treeProgress.style.height = progress + '%';
		}
	}
};
window.addEventListener('scroll', updateScrollProgress, { passive: true });
updateScrollProgress();

// Modern staggered reveal for projects and lab tools
const modernCards = document.querySelectorAll('.all-projects article, .lab-list article');
if (modernCards.length && 'IntersectionObserver' in window) {
	const modernObserver = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
				modernObserver.unobserve(entry.target);
			}
		});
	}, { threshold: 0.1 });
	modernCards.forEach((card, idx) => {
		card.classList.add('modern-scroll-item');
		card.style.setProperty('--card-delay', `${(idx % 4) * 90}ms`);
		modernObserver.observe(card);
	});
}

