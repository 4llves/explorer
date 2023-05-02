import React from 'react';

export function FormatData(props) {
  const date = new Date(props.data);

  const day = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit'
  }).format(date);

  const month = new Intl.DateTimeFormat('pt-BR', {
    month: '2-digit'
  }).format(date);

  const year = new Intl.DateTimeFormat('pt-BR', {
    year: '2-digit'
  }).format(date);

  const hour = new Intl.DateTimeFormat('pt-BR', {
    hour: '2-digit',
    minute: '2-digit'

  }).format(date);

  return <div>{`${day}/${month}/${year} às ${hour}`}</div>;
}