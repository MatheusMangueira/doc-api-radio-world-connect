'use client';
import { Ball } from '@/app/components/Ball';
import { api } from '@/app/service/api/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { ButtonSubmit } from './components/buttonSubmit';
import { Input } from './components/input';
import { StationTitle } from './components/stationTitle';

import { useEffect, useState } from 'react';
import { Alert, AlertProps } from '@/app/components/Alert';

type StationsProps = {
  id?: string;
  name: string;
  image?: string | null;
  urlRadio: string;
  latitude: number;
  longitude: number;
};

const schema = yup.object().shape({
  name: yup.string().required('nome invalido').min(3),
  image: yup.string().notRequired(),
  urlRadio: yup.string().required('URL invalido'),
  latitude: yup.number().required('latitude invalido'),
  longitude: yup.number().required('longitude invalido')
});

export const NewStationsView = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<StationsProps>({
    resolver: yupResolver(schema)
  });

  const [alertTime, setAlertTime] = useState<boolean>(false);
  const [alert, setAlert] = useState<AlertProps>({
    message: '',
    type: 'success'
  });

  const handleSubmitData = async (data: StationsProps) => {
    try {
      if (data) {
        const response = await api.post('/radio/create', {
          name: data.name,
          image: data.image,
          urlRadio: data.urlRadio,
          latitude: data.latitude,
          longitude: data.longitude
        });

        setAlert({
          message: 'Radio cadastrada com sucesso',
          type: 'success'
        });
        setAlertTime(true);
        return response;
      }
    } catch (error) {
      setAlert({
        message: 'Erro ao cadastrar radio',
        type: 'error'
      });
      setAlertTime(true);
      console.log(error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlertTime(false);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, [alert]);

  return (
    <div className="relative w-full h-screen ">
      <Ball
        className="lg:w-[648px] lg:h-[648px]
      md:w-[400px] md:h-[400px] w-[300px] h-[300px] bg-ball-yellow shadow-3xl bottom-0 lg:left-[0px]"
      />
      {alertTime && <Alert message={alert.message} type={alert.type} />}
      <div className="pt-14 pb-5">
        <StationTitle name="Cadastrar nova Radio" />
      </div>

      <div className="w-full text-center pb-10">
        <p>Cadastre sua radio preferida</p>
      </div>
      <div className="flex flex-col w-full justify-center items-center px-2 lg:p-0 gap-3">
        <div className="flex flex-col justify-center items-center w-full ">
          <Controller
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                type="text"
                placeholder="Nome da rádio"
              />
            )}
          />
          {errors.name && (
            <span className="text-red-500 ">{errors.name?.message}</span>
          )}
        </div>

        <div className="flex flex-col justify-center items-center w-full ">
          <Controller
            name="urlRadio"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                type="text"
                placeholder="URL da rádio"
              />
            )}
          />
          {errors.urlRadio && (
            <span className=" text-red-500 ">{errors.urlRadio?.message}</span>
          )}
        </div>

        <div className="flex flex-col justify-center items-center w-full ">
          <Controller
            name="image"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value === null ? '' : value}
                type="text"
                placeholder="URL da imagem"
              />
            )}
          />
          {errors.image && (
            <span className=" text-red-500 ">{errors.image?.message}</span>
          )}
        </div>

        <div className="flex flex-col justify-center items-center w-full ">
          <Controller
            name="latitude"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                type="number"
                placeholder="Latitude"
              />
            )}
          />
          {errors.latitude && (
            <span className="text-red-500">
              {errors.latitude.message ===
              'latitude must be a `number` type, but the final value was: `NaN` (cast from the value `""`).'
                ? 'latitude invalido'
                : errors.latitude.message}
            </span>
          )}
        </div>

        <div className="flex flex-col justify-center items-center w-full ">
          <Controller
            name="longitude"
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                onChange={onChange}
                value={value}
                type="number"
                placeholder="Longitude"
              />
            )}
          />
          {errors.longitude && (
            <span className="text-red-500">
              {errors.longitude.message ===
              'longitude must be a `number` type, but the final value was: `NaN` (cast from the value `""`).'
                ? 'longitude invalido'
                : errors.longitude.message}
            </span>
          )}
        </div>
      </div>

      <div className="flex justify-center w-full py-5">
        <ButtonSubmit
          onClick={handleSubmit((data) => handleSubmitData(data))}
          name="Cadastrar"
        />
      </div>
    </div>
  );
};
