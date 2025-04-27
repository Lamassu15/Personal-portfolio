
const Map = () => {
  return (
    <section className="h-96 mt-16 bg-muted">
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d68117.6772277423!2d14.032372785412202!3d57.75590136349467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46508031565bd12d%3A0x8b01be57dcc2f66d!2zSsO2bmvDtnBpbmcsIFN3ZWRlbg!5e0!3m2!1sen!2sus!4v1745520309961!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="Location Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Map;
