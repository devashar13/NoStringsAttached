import React, { useState, useRef } from 'react';
import Identicon from 'identicon.js';
import Card from '@material-ui/core/Card';
// import ReactAudioPlayer from 'react-audio-player';
import { FileDrop } from 'react-file-drop';
// import ReactJkMusicPlayer from 'react-jinke-music-player';
// import 'react-jinke-music-player/assets/index.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import mp3Icon from '../images/mp3.svg';
import './file-drag.css';
// import './player.scss';

const Main = ({ captureFile, uploadSong, songs, tipSongOwner }) => {
    const [desc, setDesc] = useState('');
    const [tip, setTip] = useState(0.1);
    const [file, setFile] = useState('');
    const fileInputRef = useRef(null);
    const onTargetClick = () => {
        fileInputRef.current.click();
    };
    return (
        <div className="container-fluid mt-5">
            <div className="row main-main">
                <div className="content" style={{ marginBottom: '50px' }}>
                    <div className="left">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                const description = desc;
                                uploadSong(description);
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    padding: 20,
                                    height: 200,
                                }}
                                className="file-drop-div"
                            >
                                <input
                                    onChange={(event) => {
                                        setFile(event.target.files.item(0));
                                        captureFile(event, event.target.files);
                                        setDesc(
                                            event.target.files.item(0).name
                                        );
                                        // console.log(
                                        //     'FILES:',
                                        //     event.target.files.item(0).name
                                        // );
                                    }}
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".mp3"
                                    style={{
                                        visibility: 'hidden',
                                        height: 0,
                                        width: 0,
                                    }}
                                />
                                <FileDrop
                                    onDrop={(files, event) => {
                                        setFile(files.item(0));
                                        captureFile(event, files);
                                        setDesc(files.item(0).name);
                                        // console.log(
                                        //     'FILES:',
                                        //     files.item(0).name
                                        // );
                                    }}
                                    onTargetClick={onTargetClick}
                                    s
                                >
                                    <div className="upload-logo">
                                        <svg
                                            width="214"
                                            height="142"
                                            viewBox="0 0 214 142"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            {' '}
                                            <g filter="url(#filter0_b)">
                                                {' '}
                                                <path
                                                    d="M174.824 53.8204C173.478 53.6593 172.361 52.6785 172.052 51.3592C165.141 21.8691 138.658 0 107 0C81.8054 0 59.8498 13.9132 48.4664 34.4403C47.9797 35.318 47.1012 35.9128 46.1068 36.0483C20.0417 39.5989 0 61.8728 0 88.75C0 118.126 23.9858 142 53.5 142H169.417C194.027 142 214 122.12 214 97.625C214 74.9708 196.911 56.4652 174.824 53.8204ZM127.833 79.875C126.176 79.875 124.833 81.2181 124.833 82.875V112.375C124.833 114.032 123.49 115.375 121.833 115.375H92.1667C90.5098 115.375 89.1667 114.032 89.1667 112.375V82.875C89.1667 81.2181 87.8235 79.875 86.1667 79.875H69.6834C67.0073 79.875 65.6703 76.6366 67.567 74.7487L104.884 37.6065C106.054 36.4415 107.946 36.4415 109.116 37.6065L146.433 74.7487C148.33 76.6366 146.993 79.875 144.317 79.875H127.833Z"
                                                    fill="white"
                                                    fillOpacity="0.14"
                                                />{' '}
                                            </g>{' '}
                                            <defs>
                                                {' '}
                                                <filter
                                                    id="filter0_b"
                                                    x="-24"
                                                    y="-24"
                                                    width="262"
                                                    height="190"
                                                    filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB"
                                                >
                                                    {' '}
                                                    <feFlood
                                                        floodOpacity="0"
                                                        result="BackgroundImageFix"
                                                    />{' '}
                                                    <feGaussianBlur
                                                        in="BackgroundImage"
                                                        stdDeviation="12"
                                                    />{' '}
                                                    <feComposite
                                                        in2="SourceAlpha"
                                                        operator="in"
                                                        result="effect1_backgroundBlur"
                                                    />{' '}
                                                    <feBlend
                                                        mode="normal"
                                                        in="SourceGraphic"
                                                        in2="effect1_backgroundBlur"
                                                        result="shape"
                                                    />{' '}
                                                </filter>{' '}
                                            </defs>{' '}
                                        </svg>
                                    </div>
                                    <div className="drag-text">
                                        <h4>Drag files here</h4>
                                    </div>
                                </FileDrop>
                            </div>
                            <div className="or-div">
                                <h3>OR</h3>
                            </div>
                            <div className="browse-div">
                                <label
                                    htmlFor="browse-input"
                                    id="browse-input-label"
                                >
                                    Browse
                                </label>
                                <input
                                    onChange={(event) => {
                                        setFile(event.target.files.item(0));
                                        captureFile(event, event.target.files);
                                        setDesc(
                                            event.target.files.item(0).name
                                        );
                                        // console.log(
                                        //     'FILES:',
                                        //     event.target.files.item(0).name
                                        // );
                                    }}
                                    ref={fileInputRef}
                                    type="file"
                                    accept=".mp3"
                                    hidden={true}
                                    id="browse-input"
                                />
                            </div>
                            <div className="show-files-to-upload">
                                {file ? (
                                    <>
                                        <img
                                            src={mp3Icon}
                                            className="mp3-icon"
                                            alt=""
                                        />
                                        <h4 className="file-name">
                                            {file.name}
                                        </h4>
                                        <div className="form-group mr-sm-2">
                                            <br />
                                            <label
                                                htmlFor="name-of-file"
                                                style={{ marginRight: 30 }}
                                            >
                                                File Name:{' '}
                                            </label>
                                            <input
                                                type="text"
                                                onChange={(e) => {
                                                    setDesc(e.target.value);
                                                }}
                                                value={desc}
                                                required
                                                id="name-of-file imageDesc"
                                            />
                                        </div>
                                        <button
                                            className="btn btn-primary btn-block btn-lg"
                                            type="submit"
                                            style={{ margin: '20px 0' }}
                                        >
                                            Upload!
                                        </button>
                                    </>
                                ) : (
                                    ''
                                )}
                            </div>
                        </form>
                    </div>
                    <div>
                        <hr
                            style={{
                                width: '100%',
                                backgroundColor: '#4959E8',
                                color: '#4959E8',
                                height: '1.5px',
                            }}
                        />
                    </div>
                    <div className="right">
                        {songs.map((song, key) => {
                            return (
                                <Card
                                    style={{ marginBottom: 50 }}
                                    className="card-main"
                                >
                                    <div className="card-header">
                                        <img
                                            className="mr-2"
                                            width="30"
                                            height="30"
                                            src={`data:image/png;base64,${new Identicon(
                                                song.author,
                                                30
                                            ).toString()}`}
                                            alt="hh"
                                        />
                                        <small className="text-muted white">
                                            {song.author}
                                        </small>
                                    </div>
                                    <ul
                                        id="imageList"
                                        className="list-group list-group-flush"
                                    >
                                        <li className="list-group-item">
                                            <div className="text-center">
                                                {/* <ReactJkMusicPlayer theme='dark' audioLists={[{musicSrc: `https://ipfs.infura.io/ipfs/${image.hash}` }]} /> */}
                                                {/* <ReactAudioPlayer
                                                    src={`https://ipfs.infura.io/ipfs/${image.hash}`}
                                                    autoPlay
                                                    controls
                                                /> */}
                                                <AudioPlayer
                                                    src={`https://ipfs.infura.io/ipfs/${song.hash}`}
                                                    showFilledVolume
                                                    // other props here
                                                />
                                            </div>
                                            <p className="white">
                                                {song.description}
                                            </p>
                                        </li>
                                        <li
                                            key={key}
                                            className="list-group-item py-2"
                                        >
                                            <small className="float-left mt-1 text-muted tips-value">
                                                TIPS:{' '}
                                                {window.web3.utils.fromWei(
                                                    song.tipAmount.toString(),
                                                    'Ether'
                                                )}{' '}
                                                ETH
                                            </small>
                                            <div
                                                style={{ float: 'right' }}
                                                className="tip-enter-div"
                                            >
                                                <input
                                                    type="number"
                                                    placeholder="Tip in ETH"
                                                    style={{ width: '100px' }}
                                                    onChange={(e) => {
                                                        setTip(e.target.value);
                                                    }}
                                                    value={tip}
                                                />
                                                <button
                                                    className="btn btn-link btn-sm float-right btn-tip ml-3"
                                                    name={song.id}
                                                    onClick={(event) => {
                                                        let tipAmount = window.web3.utils.toWei(
                                                            tip + '',
                                                            'Ether'
                                                        );
                                                        // console.log(
                                                        //     event.target.name,
                                                        //     tipAmount
                                                        // );
                                                        tipSongOwner(
                                                            event.target.name,
                                                            tipAmount
                                                        );
                                                    }}
                                                >
                                                    TIP
                                                </button>
                                            </div>
                                        </li>
                                    </ul>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
