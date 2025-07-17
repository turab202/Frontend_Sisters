import ContactSection from './components/ContactSection';
import EventPage from './components/EventPage';

function App() {
  return (
    <>
    <div className="font-sans bg-white min-h-screen">
        <EventPage />
      </div>
      <div className="font-sans bg-white min-h-screen">
        <ContactSection />
      </div>
      
    </>
  );
}

export default App;

