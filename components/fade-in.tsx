import React, { useRef, useEffect, useState } from 'react';
import { Animated, ViewStyle } from 'react-native';

interface FadeInViewProps {
  style?: ViewStyle;
  children?: React.ReactNode | React.ReactNode[];
  duration?: number;
  delay?: number;
}

const FadeInView: React.FC<FadeInViewProps> = ({
  style,
  children,
  duration = 1000,
  delay = 2000,
}) => {
  const translateY = useRef(new Animated.Value(-50)).current;
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isComponentVisible, setIsComponentVisible] = useState(true);

  useEffect(() => {
    if (!isComponentVisible) {
      return; // Skip animations if the component is not visible
    }

    const showAnimation = Animated.parallel([
      Animated.timing(translateY, {
        toValue: 0,
        duration: duration,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: duration,
        useNativeDriver: true,
      }),
    ]);

    showAnimation.start(() => {
      // Add a delay before hiding the component
      timeoutRef.current = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: duration,
          useNativeDriver: true,
        }).start(() => {
          setIsComponentVisible(false); // Mark the component as not visible after hiding
        });
      }, delay);
    });

    return () => {
      // Cleanup function to clear the timeout if the component unmounts
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [fadeAnim, translateY, isComponentVisible, duration, delay]);

  if (!isComponentVisible) {
    return null; // Return null if the component is not visible
  }

  return (
    <Animated.View
      style={{
        ...style,
        opacity: fadeAnim,
        transform: [{ translateY: translateY }],
      }}
    >
      {children}
    </Animated.View>
  );
};

export default FadeInView;
