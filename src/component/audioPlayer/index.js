import React from "react";
import ReactDOM from "react-dom";
import {HURL} from 'config';
import styled, { css } from "styled-components";
import { FocusOutlineHelper } from "./focusOutlineHelper";
import { MdIcon } from "./mdIcon";

const fmtDuration = seconds => {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${String(secs).padStart(2, "0")}`;
};

const useBuffered = audioRef => {
  const [buffered, setBuffered] = React.useState([]);

  const progressHandler = React.useCallback(e => {
    const bufferedTimeRanges = e.target.buffered;

    setBuffered(
      Array.from({ length: bufferedTimeRanges.length }, (_, i) => [
        bufferedTimeRanges.start(i),
        bufferedTimeRanges.end(i)
      ])
    );
  }, []);

  React.useLayoutEffect(() => {
    const audioEl = audioRef.current;

    if (audioEl) {
      audioEl.addEventListener("progress", progressHandler);
    }

    return () => {
      if (audioEl) {
        audioEl.removeEventListener("progress", progressHandler);
      }
    };
  }, [progressHandler, audioRef]);

  return buffered;
};

const MediaContext = React.createContext(null);

const STORAGE_KEY = "__PREFERRED_VOLUME__";

const DEFAULT_VOLUME = 0.8;

const [onIdle, cancelIdle] =
  typeof window.requestIdleCallback === "undefined"
    ? [setTimeout, clearTimeout]
    : [window.requestIdleCallback, window.cancelIdleCallback];

const MediaContextProvider = ({ children }) => {
  const [currentTrackId, setCurrentTrack] = React.useState(null);

  const volumeSaverTokenRef = React.useRef(null);

  const value = React.useMemo(
    () => ({
      currentTrackId,
      setCurrentTrack,
      getVolume: () => {
        try {
          const v = Number(JSON.parse(localStorage.getItem(STORAGE_KEY)));

          if (Number.isNaN(v) || v > 1 || v < 0) {
            throw new Error("Invalid volume");
          }

          return v;
        } catch (e) {
          return DEFAULT_VOLUME;
        }
      },
      setVolume: v => {
        if (typeof v !== "number") throw new Error("Volume should be number");
        if (Number.isNaN(v) || v > 1 || v < 0)
          throw new Error("Invalid volume");

        cancelIdle(volumeSaverTokenRef.current);
        volumeSaverTokenRef.current = onIdle(() => {
          try {
            localStorage.setItem(STORAGE_KEY, v);
          } finally {
            volumeSaverTokenRef.current = null;
          }
        });
      }
    }),
    [currentTrackId]
  );

  return (
    <MediaContext.Provider value={value}>{children}</MediaContext.Provider>
  );
};

const LINE_SIZE = 2;

const calcPosition = (value, hanldeSize, width) =>
  (hanldeSize / 2 + value * (width - hanldeSize)) / width;

const calcValue = (delta, handleSize, width) =>
  (width * delta - handleSize / 2) / (width - handleSize);

const SliderWrapper = styled.div`
  ${({ spacing, direction }) =>
    direction === "horizontal"
      ? css`
          padding-top: ${spacing}px;
          padding-bottom: ${spacing}px;
        `
      : css`
          height: 100%;
          width: ${spacing * 2 + LINE_SIZE}px;
          padding-left: ${spacing}px;
          padding-right: ${spacing}px;
        `}

  cursor: pointer;
`;

const Line = styled.div`
  ${({ direction }) =>
    direction === "horizontal"
      ? css`
          width: 100%;
          height: ${LINE_SIZE}px;
        `
      : css`
          width: ${LINE_SIZE}px;
          height: 100%;
          display: flex;
          align-items: flex-end;
        `}

  border-radius: 9999px;
  background-color: #999999;
`;

const Handle = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background-color: #fff;
  position: absolute;
  transform: translate3d(50%, -50%, 0);
  border-radius: 50%;
  box-shadow: inset 0 0 0 1px #474747;

  &:hover {
    box-shadow: inset 0 0 0 2px #474747;
  }

  ${({ isDrag }) =>
    isDrag &&
    css`
      box-shadow: inset 0 0 0 2px #474747;
    `}

  ${({ direction }) =>
    direction === "horizontal"
      ? css`
          right: 0;
          top: 50%;
        `
      : css`
          right: 50%;
          top: 0;
        `}
`;

const Active = styled.div`
  ${({ direction }) =>
    direction === "horizontal"
      ? css`
          height: 2px;
        `
      : css`
          width: 2px;
        `}

  border-radius: 9999px;
  background-color: cyan;
  position: relative;
`;

const useRenderAfterRefs = () => {
  const [isRefReady, setRefReady] = React.useState(false);

  React.useLayoutEffect(() => {
    if (!isRefReady) {
      setRefReady(true);
    }
  }, [isRefReady]);
};

export const Slider = ({
  value,
  onChange,
  onDragStart,
  onDragEnd,
  handleSize = 10,
  spacing = 20,
  direction = "horizontal",
  roundedLine = false,
  ...props
}) => {
  useRenderAfterRefs();

  const ref = React.useRef(null);

  const [isDrag, setIsDrag] = React.useState(false);
  const dragStartedRef = React.useRef(null);

  const handleMouseMove = React.useCallback(
    e => {
      const movePoint = direction === "horizontal" ? e.clientX : e.clientY;

      const size =
        direction === "horizontal"
          ? ref.current.clientWidth
          : ref.current.clientHeight;

      const delta =
        direction === "horizontal"
          ? movePoint - dragStartedRef.current.startPoint
          : dragStartedRef.current.startPoint - movePoint;

      const newValue = calcValue(
        delta / size + dragStartedRef.current.value,
        handleSize,
        size
      );

      onChange(Math.min(Math.max(0, newValue), 1));
    },
    [onChange, handleSize, direction]
  );

  const handleMouseUp = React.useCallback(
    e => {
      dragStartedRef.current = null;

      setIsDrag(false);
      if (typeof onDragEnd === "function") {
        onDragEnd();
      }

      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mousemove", handleMouseMove);
    },
    [handleMouseMove, onDragEnd]
  );

  const handleMouseDown = React.useCallback(
    e => {
      if (e.button !== 0) {
        return;
      }

      const clickPoint = direction === "horizontal" ? e.clientX : e.clientY;

      const rect = ref.current.getBoundingClientRect();

      const size =
        direction === "horizontal"
          ? ref.current.clientWidth
          : ref.current.clientHeight;

      const delta =
        direction === "horizontal"
          ? clickPoint - rect.left
          : rect.top + ref.current.clientHeight - clickPoint;

      const newValue = calcValue(delta / size, handleSize, size);

      dragStartedRef.current = {
        value: newValue,
        startPoint: clickPoint
      };

      setIsDrag(true);
      if (typeof onDragStart === "function") {
        onDragStart();
      }

      onChange(Math.min(Math.max(0, newValue), 1));

      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("mousemove", handleMouseMove);
    },
    [
      handleMouseUp,
      onChange,
      handleMouseMove,
      onDragStart,
      handleSize,
      direction
    ]
  );

  const getActiveSize = () => {
    if (ref.current) {
      return calcPosition(
        value,
        handleSize,
        direction === "horizontal"
          ? ref.current.clientWidth
          : ref.current.clientHeight
      );
    }

    return value;
  };

  return (
    <SliderWrapper
      {...props}
      ref={ref}
      onMouseDown={handleMouseDown}
      spacing={spacing}
      direction={direction}
    >
      <Line direction={direction} roundedLine={roundedLine}>
        <Active
          style={{
            [direction === "horizontal"
              ? "width"
              : "height"]: `${getActiveSize() * 100}%`
          }}
          direction={direction}
          roundedLine={roundedLine}
        >
          <Handle size={handleSize} direction={direction} isDrag={isDrag} />
        </Active>
      </Line>
    </SliderWrapper>
  );
};

const useAudio = ({ url }) => {
  const mediaContext = React.useContext(MediaContext);

  const idRef = React.useRef(null);

  const audioRef = React.useRef(null);

  if (!audioRef.current) {
    audioRef.current = new Audio(url);
  }

  const [isPlaying, setPlay] = React.useState(false);
  const [isSeeking, setSeeking] = React.useState(false);

  if (
    isPlaying &&
    mediaContext.currentTrackId &&
    mediaContext.currentTrackId !== idRef.current
  ) {
    setPlay(false);
  }

  React.useEffect(() => {
    if (audioRef.current) {
      if (isSeeking && !audioRef.current.paused) {
        audioRef.current.pause();
      } else if (isPlaying && audioRef.current.paused) {
        audioRef.current.play();
      } else if (!isPlaying && !audioRef.current.paused) {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, isSeeking, mediaContext]);

  const [volume, setVolume] = React.useState(() => mediaContext.getVolume());
  const [isMuted, setMuted] = React.useState(false);

  React.useEffect(() => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.volume = 0;
      } else {
        // logarithmic volume control
        audioRef.current.volume = Math.pow(volume, 2);
      }
    }
  }, [volume, isMuted]);

  const [speed, setSpeed] = React.useState(1);

  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.playbackRate = speed;
    }
  }, [speed]);

  const [duration, setDuration] = React.useState(Infinity);

  const durationChangeHandler = React.useCallback(e => {
    setDuration(e.target.duration);
  }, []);

  React.useLayoutEffect(() => {
    const audioEl = audioRef.current;

    if (audioEl) {
      audioEl.addEventListener("durationchange", durationChangeHandler);
    }

    return () => {
      if (audioEl) {
        audioEl.removeEventListener("durationchange", durationChangeHandler);
      }
    };
  }, [durationChangeHandler]);

  const [currentTime, setCurrentTime] = React.useState(0);

  const currentTimeChangeHandler = React.useCallback(e => {
    setCurrentTime(e.target.currentTime);
  }, []);

  React.useLayoutEffect(() => {
    const audioEl = audioRef.current;

    if (audioEl) {
      audioEl.addEventListener("timeupdate", currentTimeChangeHandler);
    }

    return () => {
      if (audioEl) {
        audioEl.removeEventListener("timeupdate", currentTimeChangeHandler);
      }
    };
  }, [currentTimeChangeHandler]);

  const handleSeek = React.useCallback(
    value => {
      const currentTime = value * audioRef.current.duration;
      audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime);
    },
    [audioRef]
  );

  const handleSeekStart = React.useCallback(() => {
    setSeeking(true);
  }, []);

  const handleSeekEnd = React.useCallback(() => {
    setSeeking(false);
  }, []);

  return {
    currentTime,
    duration,
    isPlaying: isPlaying,
    setPlaying: updater => {
      const value =
        typeof updater === "function" ? updater(isPlaying) : updater;

      if (value) {
        mediaContext.setCurrentTrack(idRef.current);
        setPlay(true);
      } else {
        mediaContext.setCurrentTrack(null);
        setPlay(false);
      }
    },
    volume: isMuted ? 0 : volume,
    setVolume: updater => {
      const value = typeof updater === "function" ? updater(volume) : updater;

      if (value !== 0) {
        setMuted(false);
      }

      setVolume(value);
      mediaContext.setVolume(+value);
    },
    isMuted,
    setMuted,
    speed,
    setSpeed,
    handleSeek,
    handleSeekStart,
    handleSeekEnd
  };
};

function* speedValues() {
  while (true) {
    yield 1;
    yield 1.5;
    yield 2;
    yield 0.5;
    yield 0.75;
  }
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  user-select: none;

  padding: 6px 15px;
  font-size: 12px;
  color: #999999;

  & > *:not(:last-child) {
    margin-right: 3px;
  }

  button {
    display: flex;
    appearance: none;
    background: transparent;
    border: none;

    :hover,
    :focus {
      color: #a3a3a3;
    }

    :active {
      color: #474747;
    }
  }

  a {
    display: flex;
    color: inherit;
    text-decoration: none;

    :hover,
    :focus {
      color: #a3a3a3;
    }

    :focus {
      outline-color: rgba(0, 103, 244, 0.247);
      outline-style: auto;
      outline-width: 5px;
    }

    :active {
      color: #474747;
    }
  }

  .material-icons {
    font-size: 22px;
  }
`;

const VolumeControl = styled.div`
  position: absolute;
  bottom: -2px;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  background-color: #f8f8f8;
  height: 90px;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1), 0px -1px 4px rgba(0, 0, 0, 0.05);
  padding-top: 8px;
`;

const VolumeButton = styled.div`
  position: relative;
  ${VolumeControl} {
    display: ${({ isVolumeDragging }) => (isVolumeDragging ? "block" : "none")};
  }

  &:hover {
    ${VolumeControl} {
      display: block;
    }
  }

  &:focus-within {
    ${VolumeControl} {
      display: block;
    }
  }
`;

const SliderWrapperX = styled.div`
  height: 55px;
`;

const TimeControl = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;

  &&& {
    margin: 0 20px;
  }

  & > * {
    margin: 0 5px;
  }
`;

const AudioTag = ({ url }) => {
  const {
    currentTime,
    duration,
    isPlaying,
    setPlaying,
    volume,
    setVolume,
    setMuted,
    speed,
    setSpeed,
    handleSeek,
    handleSeekStart,
    handleSeekEnd
  } = useAudio({ url });

  const speedIterRef = React.useRef(null);

  if (!speedIterRef.current) {
    speedIterRef.current = speedValues();
    setSpeed(speedIterRef.current.next().value);
  }

  const [isVolumeDragging, setVolumeDragging] = React.useState(false);

  return (
    <div>
      <TimeControl>
        <Slider
          style={{ flexGrow: 1 }}
          value={currentTime / duration}
          onChange={handleSeek}
          onDragStart={handleSeekStart}
          onDragEnd={handleSeekEnd}
          handleSize={10}
        />
      </TimeControl>
      <Wrapper>
        <div>
          <span>{fmtDuration(currentTime)}</span>
          {"  /  "}
          <span style={{ color: "white" }}>
            {duration === Infinity ? "-:-" : fmtDuration(duration)}
          </span>
        </div>
        <button onClick={() => setPlaying(x => !x)}>
          <MdIcon
            name={isPlaying ? "pause" : "play_arrow"}
            style={{ color: "white" }}
          />
        </button>
        <button onClick={() => setSpeed(speedIterRef.current.next().value)}>
          <MdIcon name="fast_forward" style={{ color: "white" }} />
        </button>
        <VolumeButton isVolumeDragging={isVolumeDragging}>
          <button
            style={{ position: "relative", zIndex: 1 }}
            onClick={() => setMuted(x => !x)}
          >
            <MdIcon
              name={volume === 0 ? "volume_off" : "volume_up"}
              style={isVolumeDragging ? { color: "gray" } : { color: "white" }}
            />
          </button>
          <VolumeControl>
            <SliderWrapperX>
              <Slider
                value={volume}
                onChange={setVolume}
                onDragStart={() => setVolumeDragging(true)}
                onDragEnd={() => setVolumeDragging(false)}
                direction="vertical"
                handleSize={6}
                spacing={11}
              />
            </SliderWrapperX>
          </VolumeControl>
        </VolumeButton>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <MdIcon name="get_app" />
        </a>
      </Wrapper>
    </div>
  );
};

function AudioPlayer(props) {
  return (
    <MediaContextProvider>
      <div>
        <AudioTag url={`${HURL}/music/track?track_id=65`} />
         {/* <AudioTag url={props로 받은 url주소를 여기에 넣는다 ex/props.url} /> */}
      </div>

      <FocusOutlineHelper />
    </MediaContextProvider>
  );
}

export default AudioPlayer;
