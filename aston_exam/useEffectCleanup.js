useEffect(() => {
  const subscription = props.source.subscribe();
  return () => {
    // Очистить подписку
    subscription.unsubscribe();
  };
});
