import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeart, 
  faHandsHelping, 
  faGraduationCap, 
  faGlobe,
  faArrowRight,
  faCalendarAlt,
  faUsers,
  faDonate
} from '@fortawesome/free-solid-svg-icons';
import { useQuery } from 'react-query';
import { fetchBlogs, fetchPrograms, fetchEvents } from '../services/api';

const Home = () => {
  const { data: blogs } = useQuery('home-blogs', () => fetchBlogs({ limit: 3 }));
  const { data: programs } = useQuery('home-programs', () => fetchPrograms({ limit: 4 }));
  const { data: events } = useQuery('home-events', () => fetchEvents({ limit: 3 }));

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stats = [
    { icon: faUsers, value: '10,000+', label: 'Lives Impacted' },
    { icon: faGraduationCap, value: '500+', label: 'Graduates' },
    { icon: faHandsHelping, value: '50+', label: 'Projects' },
    { icon: faGlobe, value: '15+', label: 'Countries' },
  ];

  const features = [
    {
      icon: faGraduationCap,
      title: 'Quality Education',
      description: 'Providing access to quality education for underprivileged youth.'
    },
    {
      icon: faHandsHelping,
      title: 'Community Support',
      description: 'Building strong communities through sustainable development programs.'
    },
    {
      icon: faHeart,
      title: 'Healthcare Access',
      description: 'Ensuring basic healthcare facilities reach every corner.'
    },
    {
      icon: faGlobe,
      title: 'Environmental Action',
      description: 'Taking action to protect our planet for future generations.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3"
            alt="Hero Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Empowering Future
              <span className="text-ngo-green"> Leaders</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Join us in our mission to create positive change and build a better tomorrow for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/donate" className="btn-primary inline-flex items-center justify-center">
                <FontAwesomeIcon icon={faDonate} className="mr-2" />
                Donate Now
              </Link>
              <Link to="/programs" className="btn-outline inline-flex items-center justify-center">
                Our Programs
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-ngo-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FontAwesomeIcon icon={stat.icon} className="text-ngo-primary text-2xl" />
                </div>
                <h3 className="text-3xl font-bold text-ngo-dark mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              We focus on creating sustainable impact through various initiatives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card p-6"
              >
                <div className="w-12 h-12 bg-ngo-primary rounded-lg flex items-center justify-center mb-4">
                  <FontAwesomeIcon icon={feature.icon} className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-bold text-ngo-dark mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="section-title">Our Programs</h2>
            <p className="section-subtitle">
              Discover the transformative programs we offer to empower communities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs?.data?.slice(0, 4).map((program, index) => (
              <motion.div
                key={program._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card"
              >
                <img 
                  src={program.image || 'https://via.placeholder.com/400x250'} 
                  alt={program.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-ngo-dark mb-2">{program.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{program.description?.substring(0, 100)}...</p>
                  <Link 
                    to={`/programs/${program._id}`}
                    className="text-ngo-primary font-semibold hover:text-ngo-green inline-flex items-center"
                  >
                    Learn More
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 text-sm" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make a Difference?
            </h2>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Your support can help us reach more communities and create lasting change.
            </p>
            <Link to="/donate" className="btn-primary inline-flex items-center">
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              Donate Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;