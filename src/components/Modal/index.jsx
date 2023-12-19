export const Modal = (props) => {
  // useEffect(() => {
  //   if (props.openModal) {
  //     setTimeout(() => props.handleClose(), 3000)
  //   }
  // }, [props, props.openModal])

  return props.openModal ? (
    <div>
      <h1>Obrigado por participar</h1>
      <p>O seu feedback é muito importante pra nós, nossa equipe agradece ❤️</p>
    </div>
  ) : undefined
}
