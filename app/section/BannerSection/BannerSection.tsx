const BannerSection = ({ banner }: { banner: string }) => {
  return (
    <section className={`contain w-full h-[400px]`}>
      <div
        style={{ backgroundImage: `url('${banner}')` }}
        className={`rounded-xl bg-cover bg-center bg-no-repeat h-full`}
      />
    </section>
  );
};

export default BannerSection;
