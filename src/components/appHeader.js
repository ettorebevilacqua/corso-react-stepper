export default (props) => {
  const { lista, pippo } = props;
  return (
    <>
      <div className="box s30">First React {pippo}</div>
      <div className="box s50 right textWhite">
        {lista.map((link, i) => (
          <a key={i} href={link.url} className="button textWhite">
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};
