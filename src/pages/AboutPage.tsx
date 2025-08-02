import { Link } from 'react-router';
import Seo from '../components/Seo';
import { publisherInfo } from '../data/publisher';

interface ValueCardProps {
  title: string;
  description: string;
  icon: string;
}

function ValueCard({ title, description, icon }: ValueCardProps) {
  const getIconSvg = (iconName: string) => {
    switch (iconName) {
      case 'shield-check':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        );
      case 'star':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
          </svg>
        );
      case 'users':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
          </svg>
        );
      case 'lightbulb':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      case 'heart':
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow duration-200">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
        {getIconSvg(icon)}
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  photo?: string;
}

function TeamMember({ name, position, bio, photo }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 text-center">
      <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full overflow-hidden">
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        )}
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-1">{name}</h4>
      <p className="text-primary-600 font-medium mb-3">{position}</p>
      <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <Seo
        title={`Tentang Kami - ${publisherInfo.name}`}
        description={publisherInfo.description}
        keywords="tentang kami, penerbit islam, visi misi, nilai-nilai islami, tim penerbit"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Banner */}
        <div className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Tentang Kami</h1>
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
                Mengenal lebih dekat {publisherInfo.name}
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Profil Publisher */}
          <section className="mb-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Profil Publisher</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {publisherInfo.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Dengan pengalaman bertahun-tahun dalam dunia penerbitan, kami telah menerbitkan 
                  ratusan judul buku yang telah dibaca oleh ribuan pembaca di seluruh Nusantara. 
                  Komitmen kami adalah menyediakan literatur Islam yang berkualitas tinggi dan 
                  mudah dipahami oleh semua kalangan.
                </p>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-lg flex items-center justify-center p-8">
                  <img 
                    src="/logo-ithbi.png" 
                    alt="Logo ITHBI" 
                    className="w-48 h-48 lg:w-64 lg:h-64 object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Visi & Misi */}
          <section className="mb-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-12">
              <div className="mb-8 lg:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Visi</h2>
                <div className="bg-primary-50 border-l-4 border-primary-400 p-6 rounded-r-lg">
                  <p className="text-lg text-gray-800 leading-relaxed italic">
                    "{publisherInfo.vision}"
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Misi</h2>
                <div className="space-y-4">
                  {publisherInfo.mission.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                        {index + 1}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Nilai-nilai */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nilai-nilai Kami</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nilai-nilai yang menjadi fondasi dalam setiap langkah dan keputusan kami
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {publisherInfo.values.map((value, index) => (
                <ValueCard
                  key={index}
                  title={value.title}
                  description={value.description}
                  icon={value.icon || 'star'}
                />
              ))}
            </div>
          </section>

          {/* Tim */}
          {publisherInfo.team && publisherInfo.team.length > 0 && (
            <section className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Tim Kami</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Orang-orang berdedikasi di balik setiap buku berkualitas yang kami terbitkan
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {publisherInfo.team.map((member, index) => (
                  <TeamMember
                    key={index}
                    name={member.name}
                    position={member.position}
                    bio={member.bio}
                    photo={member.photo}
                  />
                ))}
              </div>
            </section>
          )}

          {/* Call to Action */}
          <section className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Hubungi Kami</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Tertarik untuk bekerja sama atau memiliki pertanyaan tentang buku-buku kami? 
              Jangan ragu untuk menghubungi tim kami.
            </p>
            <Link
              to="/kontak"
              className="inline-flex items-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200 text-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Hubungi Kami Sekarang
            </Link>
          </section>
        </div>
      </div>
    </>
  );
}