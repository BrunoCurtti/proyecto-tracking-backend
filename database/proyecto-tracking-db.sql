PGDMP                         {            proyecto-tracking    15.3    15.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    16938    proyecto-tracking    DATABASE     �   CREATE DATABASE "proyecto-tracking" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Uruguay.1252';
 #   DROP DATABASE "proyecto-tracking";
                postgres    false            �            1259    16940    figurita    TABLE       CREATE TABLE public.figurita (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL,
    categoria character varying(50),
    url_foto character varying(100),
    la_tengo boolean DEFAULT false NOT NULL,
    cantidad integer DEFAULT 0 NOT NULL
);
    DROP TABLE public.figurita;
       public         heap    postgres    false            �            1259    16939    figurita_id_seq    SEQUENCE     �   CREATE SEQUENCE public.figurita_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.figurita_id_seq;
       public          postgres    false    215                        0    0    figurita_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.figurita_id_seq OWNED BY public.figurita.id;
          public          postgres    false    214            e           2604    16943    figurita id    DEFAULT     j   ALTER TABLE ONLY public.figurita ALTER COLUMN id SET DEFAULT nextval('public.figurita_id_seq'::regclass);
 :   ALTER TABLE public.figurita ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    215    214    215            �          0    16940    figurita 
   TABLE DATA           W   COPY public.figurita (id, nombre, categoria, url_foto, la_tengo, cantidad) FROM stdin;
    public          postgres    false    215   P                  0    0    figurita_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.figurita_id_seq', 10, true);
          public          postgres    false    214            i           2606    16947    figurita figurita_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.figurita
    ADD CONSTRAINT figurita_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.figurita DROP CONSTRAINT figurita_pkey;
       public            postgres    false    215            �   �   x��ѿn�0���~	�l���]���j�t�J���QE��t˧������"l���ߍ��"x�-:�ޏ�I2�]k�7M"+�R#����GUrU2V[t����y
!�{�"�rEw�q����cK�/g{hfkm���R��aKt����b�,]�7�bHI?D����b�P�׹5�ρ�U�b�)���)�`ܛ����7��X�������+��0�� o�y     